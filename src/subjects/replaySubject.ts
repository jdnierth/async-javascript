import { ReplaySubject } from "rxjs";

const replaySubject = new ReplaySubject(2);

console.log("----------REPLAY SUBJECT ---------------");
replaySubject.next("Anton");
replaySubject.next("Berta");
replaySubject.next("Camille");
replaySubject.complete();

// Subscribing after next calls
const rSub1 = replaySubject.subscribe((data) =>
  console.log("Subscription 1: ", data)
);

const rSub2 = replaySubject.subscribe((data) =>
  console.log("Subscription 2: ", data)
);

rSub1.unsubscribe();
rSub2.unsubscribe();
