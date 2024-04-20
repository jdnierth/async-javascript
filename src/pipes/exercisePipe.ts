import { from } from "rxjs";
import { filter, reduce, take, tap } from "rxjs/operators";

const primes = from([2, 3, 5, 7, 11, 13, 17, 19, 23]);

primes
  .pipe(
    filter((prime) => prime % 2 !== 0),
    take(5),
    tap((res) => console.log("Picked: ", res)),
    reduce((sum, acc) => sum + acc, 0)
  )
  .subscribe({
    next: (result) => console.log("Sum: ", result),
    error: (error) => console.log("Error: ", error),
  });
