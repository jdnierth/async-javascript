import { from, zip } from "rxjs";
import { delay, map } from "rxjs/operators";

interface titleI {
  id: number;
  title: string;
}

interface historyI {
  id: number;
  title: string;
}

const titleDb$ = from([
  { id: 1, title: "Titel 1" },
  { id: 2, title: "Titel 2" },
]).pipe(delay(500));

const historyDb$ = from([
  { id: 1, history: {} },
  { id: 2, history: { created: "1990" } },
]).pipe(delay(500));

zip(titleDb$, historyDb$)
  .pipe(
    map((a) => {
      const [titles, histories] = a;
      return {
        id: titles.id,
        title: titles.title,
        history: histories.history,
      };
    })
  )
  .subscribe((res) => console.log("Result: ", res));
