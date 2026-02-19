function retry(fn, attempts) {
  return new Promise((resolve, reject) => {
    const attempt = (remaining) => {
      Promise.resolve(fn())
        .then(resolve)
        .catch((err) => {
          if (remaining > 1) {
            attempt(remaining - 1);
          } else {
            reject(err);
          }
        });
    };
    attempt(attempts);
  });
}

let apiCallCount = 0;

const fetchData = () => {
  return new Promise((resolve, reject) => {
    apiCallCount++;
    console.log("API Call Attempt:", apiCallCount);

    if (apiCallCount < 4) {
      reject("Network Error");
    } else {
      resolve("Data loaded successfully");
    }
  });
};


retry(fetchData, 3)
  .then((data) => {
    console.log("SUCCESS:", data);
  })
  .catch((error) => {
    console.log("FAILED:", error);
  });


  