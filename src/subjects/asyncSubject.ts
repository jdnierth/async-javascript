import { AsyncSubject } from "rxjs";

// ------------------------------
const asyncSubject = new AsyncSubject();

const aSub1 = asyncSubject.subscribe((data) =>
  console.log("aSubscription 1: ", data)
);
const aSub2 = asyncSubject.subscribe((data) =>
  console.log("aSubscription 2: ", data)
);

console.log("----------ASYNCSUBJECT ---------------");
asyncSubject.next("Trigger 1");
asyncSubject.next("Trigger 2");
asyncSubject.complete(); // an async subject has to complete otherwise it won't trigger

aSub1.unsubscribe();
aSub2.unsubscribe();
