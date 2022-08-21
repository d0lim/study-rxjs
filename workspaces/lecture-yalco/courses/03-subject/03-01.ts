import { Subject } from "rxjs";

const subject = new Subject();

subject.subscribe(console.log);

subject.next(1);
subject.next(2);
subject.next(4);
