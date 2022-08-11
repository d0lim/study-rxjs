import { Observable, Observer } from "rxjs";

const obj: any = {};

const obs$ = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  obj.a.find(); // Occur error
  subscriber.next(4);
  subscriber.complete();
});

const observer: Observer<any> = {
  next: console.log,
  error: (err: Error) => console.error("error while subscribing", err),
  complete: () => console.log("complete"),
};

obs$.subscribe(observer);
