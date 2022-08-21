import { ReplaySubject } from "rxjs";

// 마지막 3개의 값을 memoize 하고 있다가, 새로운 sub이 생기면 다시 발행
const subject = new ReplaySubject(3);

subject.subscribe((x) => console.log("A:", x));

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);
subject.next(5);

subject.subscribe((x) => console.log("B:", x));

subject.next(6);
subject.next(7);
