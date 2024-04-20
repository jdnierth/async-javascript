import { Subject } from "rxjs";

const subject = new Subject();

const sub1 = subject.subscribe((data) => console.log("Subscription 1: ", data));

const sub2 = subject.subscribe((data) => console.log("Subscription 2: ", data));

console.log("----------SUBJECT ---------------");
subject.next("Trigger subject 1");
subject.next("Trigger subject 2");

sub1.unsubscribe();
sub2.unsubscribe();
