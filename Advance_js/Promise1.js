const pizza = Promise.resolve("Pizza ready");
const burger = Promise.resolve("Burger ready");

Promise.all([pizza, burger])
// Promise.all([pizza, Fries])
  .then(results => console.log(results)) // ["Pizza ready", "Burger ready"]
  .catch(err => console.error("Order failed:", err));

const app1 = new Promise(res => setTimeout(() => res("App1 delivered"), 2000));
const app2 = new Promise(res => setTimeout(() => res("App2 delivered"), 1000));

Promise.race([app1, app2])
  .then(result => console.log(result)) // "App2 delivered"


const friend1 = Promise.reject("Busy");
const friend2 = Promise.resolve("Friend2 can pick you up");

Promise.any([friend1, friend2])
  .then(result => console.log(result)) // "Friend2 can pick you up"


const application1 = Promise.resolve("Application1 approved");
const application2 = Promise.reject("Application2 rejected");

Promise.allSettled([application1, application2])
  .then(results => console.log(results));

