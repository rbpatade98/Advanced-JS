// /********************
//  ARITHMETIC OPERATORS
// ********************/
// let a = 10;
// let b = 3;

// console.log("a+b =",a + b);   // Addition → 13
// console.log("a-b =",a - b);   // Subtraction → 7
// console.log("a*b =",a * b);   // Multiplication → 30
// console.log("a/b =",a / b);   // Division → 3.33
// console.log("a%b =",a % b);   // Modulus → 1
// console.log("a**b =",a ** b);  // Exponent → 1000

// a++; // Increment
// b--; // Decrement
// console.log(a, b);    // 11, 2


// /********************
//  ASSIGNMENT OPERATORS
// ********************/
// let x = 5;

// x += 2;  // x = x + 2
// x -= 1;
// x *= 2;
// x /= 2;
// x %= 3;
// console.log(x); // 1


// /********************
//  COMPARISON OPERATORS
// ********************/
// console.log(5 == "5");    // true
// console.log(5 === "5");   // false
// console.log(5 != 4);      // true
// console.log(5 !== "5");   // true
// console.log(5 > 3);       // true
// console.log(5 < 3);       // false
// console.log(5 >= 5);      // true
// console.log(5 <= 4);      // false


// /********************
//  LOGICAL OPERATORS
// ********************/
// console.log(true && false); // false
// console.log(true || false); // true
// console.log(!true);         // false


// /********************
//  BITWISE OPERATORS
// ********************/
// console.log(5 & 1);   // AND → 1
// console.log(5 | 1);   // OR → 5
// console.log(5 ^ 1);   // XOR → 4
// console.log(~5);      // NOT → -6
// console.log(5 << 1);  // Left shift → 10
// console.log(5 >> 1);  // Right shift → 2
// console.log(5 >>> 1); // Unsigned right shift → 2


// /********************
//  STRING OPERATORS
// ********************/
// console.log("Hello" + " World"); // Concatenation

// let str = "Hi";
// str += "!";
// console.log(str); // "Hi!"


// /********************
//  TERNARY OPERATOR
// ********************/
// let age = 20;
// let status = age >= 18 ? "Adult" : "Minor";
// console.log(status);


// /********************
//  TYPE OPERATORS
// ********************/
// console.log(typeof 42);        // "number"
// console.log(typeof "Hello");   // "string"

// let arr = [];
// console.log(arr instanceof Array); // true


// /********************
//  NULLISH & OPTIONAL
// ********************/
// let name = null;
// console.log(name ?? "Guest"); // "Guest"

// let user = {};
// console.log(user.address?.city); // undefined


// /********************
//  UNARY OPERATORS
// ********************/
// let n = "5";
// console.log(+n);  // 5 (string → number)
// console.log(-n);  // -5                                                          
// console.log(!false); // true


// /********************
//  OTHER OPERATORS
// ********************/
// let obj = { a: 1 };
// console.log("a" in obj); // true

// delete obj.a;
// console.log(obj); // {}

// let date = new Date();
// console.log(date);

// console.log(this); // current context


// /********************
//  SPREAD & REST
// ********************/
// // Spread
// let arr1 = [1, 2];
// let arr2 = [...arr1, 3];
// console.log(arr2); // [1, 2, 3]

// // Rest
// function sum(...nums) {
//   console.log(nums);
// }
// sum(1, 2, 3);


let a1 = 6
console.log(a1++);
console.log(a1);

let b1 = 6
console.log(++b1);
console.log(b1);

let a2 = 6
console.log(a2--);
console.log(a2);

let b2 = 6
console.log(--b2);
console.log(b2);



console.log("2"==2);
console.log("2"===2);

console.log([] == [])
console.log({} == {})
console.log([] == {})

