import { AsyncSubject } from "rxjs";

const subject = new AsyncSubject();

subject.subscribe((x) => console.log("A:", x));

subject.next(1);
subject.next(2);
subject.next(3);

subject.subscribe((x) => console.log("B:", x));

subject.next(4);
subject.next(5);

subject.subscribe((x) => console.log("C:", x));

subject.next(6);
subject.next(7);
// Complete가 발생하면 그 때의 값만 sub들에게 전달.
subject.complete();
