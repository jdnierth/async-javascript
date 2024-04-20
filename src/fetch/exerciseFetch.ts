import { from } from "rxjs";

const data = fetch("https://jsonplaceholder.typicode.com/todos/1");

from(data).subscribe({
  next: (value) => console.log("output: ", value),
  error: (e) => console.log("Error: ", e),
});
