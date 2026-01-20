async function foo() {
  return 100;
}

foo().then((num) => console.log(100));

async function bar() {
  throw Error("some error occurred from bar");
}

bar()
  .then(() => console.log("success"))
  .catch((e) => console.error(e));

// Error: some error occurred from bar
//     at bar (/example/index.js:8:9)
//     at Object.<anonymous> (/example/index.js:11:1)
//     at Module._compile (node:internal/modules/cjs/loader:1159:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1213:10)
//     at Module.load (node:internal/modules/cjs/loader:1037:32)
//     at Module._load (node:internal/modules/cjs/loader:878:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//     at node:internal/main/run_main_module:23:47
