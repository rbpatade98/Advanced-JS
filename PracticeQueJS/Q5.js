// divide(a, b) async function
// An async function that:
// Returns the division result if b is not zero
// Throws an error if division by zero is attempted


async function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero"); 
  }
  return a / b;
}


async function test(a, b) {
  try {
    const result = await divide(a, b);
    console.log(result);
  } catch (err) {
    console.error(err.message); 
  }
}

test(10,0); 
test(10,2)

