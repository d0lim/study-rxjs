import { interval, Subject } from "rxjs";

const subject = new Subject();
const obs$ = interval(1000);

obs$.subscribe(subject);

subject.subscribe((x) => console.log("subscribe immediately:", x));
setTimeout((_) => {
  subject.subscribe((x) => console.log("subscribe after 3 sec:", x));
}, 3000);
setTimeout((_) => {
  subject.subscribe((x) => console.log("subscribe after 10 sec:", x));
}, 10000);
setTimeout((_) => {
  subject.subscribe((x) => console.log("subscribe after 14 sec:", x));
}, 14000);
