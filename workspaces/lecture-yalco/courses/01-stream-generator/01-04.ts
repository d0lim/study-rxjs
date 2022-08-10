import { Observable } from "rxjs";

const obs$ = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete();
});

obs$.subscribe((item) => console.log(item));
