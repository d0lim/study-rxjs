import { Subject } from "rxjs";

const subject = new Subject();

setTimeout((_) => {
  let x = 0;
  setInterval((_) => {
    subject.next(x++);
  }, 2000);
}, 5000);

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
