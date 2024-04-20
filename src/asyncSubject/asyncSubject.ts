import { AsyncSubject, Subject } from "rxjs";

const subject = new Subject();

const sub1 = subject.subscribe((data) => console.log("Subscription 1: ", data));

const sub2 = subject.subscribe((data) => console.log("Subscription 2: ", data));

subject.next("Trigger subject 1");
subject.next("Trigger subject 2");

// ------------------------------
const asyncSubject = new AsyncSubject();

const aSub1 = asyncSubject.subscribe((data) =>
  console.log("aSubscription 1: ", data)
);
const aSub2 = asyncSubject.subscribe((data) =>
  console.log("aSubscription 2: ", data)
);

asyncSubject.next("Trigger 1");
asyncSubject.next("Trigger 2");
asyncSubject.complete(); // an async subject has to complete otherwise it won't trigger
