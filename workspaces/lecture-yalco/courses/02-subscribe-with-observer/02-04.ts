import { interval } from "rxjs";

const obs$ = interval(1000);
const subscription = obs$.subscribe((x) => console.log(x));

setTimeout(() => subscription.unsubscribe(), 5500);
