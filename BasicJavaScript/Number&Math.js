let age = Number("25");
console.log(age + 5); 30


console.log(parseInt("99.99")) //99 
console.log(parseInt("100px")) //100

console.log((parseFloat("99.99px") )) //99.99

// let price = 19.987
// console.log(price.toFixed(2)) //99.99

let score = 100
result = score.toString();
console.log(typeof(result))



console.log(isNaN("hello")); // true
console.log(isNaN(10));      // false

console.log(Math.round(4.6)); // 5 nearest number
console.log(Math.round(4.4)); // 4

console.log(Math.ceil(4.1)); // 5 next number
console.log(Math.ceil(-4.1)); // -4

console.log(Math.floor(4.9)); // 4  round down previous integer
console.log(Math.floor(-4.9)); // -5

console.log(Math.abs(-10)); // 10 return absolute value 
console.log(Math.abs(5));   // 5

console.log(Math.sqrt(16)); // 4   return square root
console.log(Math.sqrt(2));  // 1.4142135623730951

console.log(Math.pow(2, 3)); // 8 return x raised to power y
console.log(Math.pow(5, 2)); // 25

console.log(Math.min(10, 5, 20)); // 5 return min number

console.log(Math.max(10, 5, 20)); // 5 return max number


console.log(Math.floor(Math.random() * 10)+1); //return random number

