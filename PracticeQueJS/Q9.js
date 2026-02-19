// Output order prediction
// Demonstrates JavaScript’s event loop:
// Synchronous code runs first
// Microtasks (Promises, await) run before macrotasks (setTimeout)
// A → D → F → C → E → B

console.log("A"); //call stack

setTimeout(() => console.log("B"), 0); //Task Queue

Promise.resolve().then(() => console.log("C")); //Microtask Queue

(async () => {
  console.log("D");
  await null;
  console.log("E"); 
})();

console.log("F");
