
// The issue is that one .then() does not return a value, so the next .then() receives undefined.

doTask()
  .then(result => {
    process(result);
  })
  .then(final => {
    console.log(final);
  });










// function doTask() {
//   return Promise.resolve(5); 
// }

// function process(result) {
//   return result * 2; 
// }

// doTask()
//   .then(result => {
//     return process(result); 
//   })
//   .then(final => {
//     console.log(final);
//   });

  