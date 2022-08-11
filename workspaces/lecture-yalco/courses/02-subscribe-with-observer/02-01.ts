import { from, observable, Observer } from "rxjs";

const observable$ = from([1, 2, 3, 4, 5]);

const observer: Observer<number> = {
  next: console.log,
  error: (err: Error) => console.error("error while subscribing", err),
  complete: () => console.log("complete"),
};

observable$.subscribe(observer);
