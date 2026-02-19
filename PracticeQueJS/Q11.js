// withTimeout(promise, ms)
// A utility that wraps a Promise and:
// Rejects if it takes longer than the specified time
// Prevents hanging async operations

function withTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Promise timed out")),   ms)
    )
  ]);
}

const slowPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Success!");
  }, 3000);
});

withTimeout(slowPromise,4000)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error.message);
  });







//   withTimeout called
//       |
//       v
// Original promise starts
// Timeout timer starts
//       |
//       v
// Whichever finishes first wins
//       |
//       ├─ Promise resolves → return result
//       |
//       └─ Timeout finishes → throw "Promise timed out"
