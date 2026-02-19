// Promise.allSettled() usage
// Executes multiple Promises and:
// Waits for all to finish (success or failure)
// Filters out only the successful responses
// Ignores rejected ones

// Example API functions
async function api1() {
  return ("data from api1")
}

async function api2() {
  throw new Error("api2 failed")
}

async function api3() {
  return ("data from api3")
}

async function getSuccessfulResponses() {

  const results = await Promise.allSettled([api1(), api2(), api3()])

  const successfulResponses = results
    .filter(result => result.status === "fulfilled")
    .map(result => result.value)

  return successfulResponses
}

(async () => {
  const successes = await getSuccessfulResponses();
  console.log("Successful responses:", successes);
})();