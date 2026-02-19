// let a = null;
// let b = 2345;
// let c = true;
// let d = BigInt(212) + BigInt(8);
// let e = "Ram";
// let f = Symbol("Iam nice symbol");
// let g = undefined
// console.log(a,b,c,d,e,f,g);

// console.log(typeof(d));


// const item = {
//     "ram": "developer",
//     "sham": 67,
//     "tanmay": "broker",
//     "mukul": false
// }

// console.log(item["ram"]);

// // 1. Primitive Data Types (Immutable)

// let num = 42;
// let str = "Hello";
// let bool = true;
// let n = null;
// let u;
// let sym = Symbol("id");
// let big = 12345678901234567890n;

// console.log("Primitive Types:");
// console.log("Number:", num);
// console.log("String:", str);
// console.log("Boolean:", bool);
// console.log("Null:", n);
// console.log("Undefined:", u);
// console.log("Symbol:", sym);
// console.log("BigInt:", big);

// // 2. Non-Primitive / Reference Data Types (Mutable)


// let obj = { name: "Ram", age: 25 };
// let arr = [1, 2, 3];
// let func = function() { return "Hi"; };
// let date = new Date();

// console.log("Non-Primitive Types:");
// console.log("Object:", obj);
// console.log("Array:", arr);
// console.log("Function:", func());
// console.log("Date:", date);

// /*
// Primitive Types:
// Stored by value
// Immutable: changing the copied variable does not affect the original

// Non-Primitive Types:
// Stored by reference
// Mutable: changing the copied variable affects the original object/array
//  */

// let num = 87654;
// let str = String(num);
// console.log(typeof(num));

// let score =98;
// console.log(score);

// score =67;
// console.log(score)


// let num2 = 67;
// console.log(num2)

// let str2 = String(num2);

// console.log(typeof(num2));
// console.log(typeof(str2));

let a = 3456;
let b = "RAM";
let c = true
let d =  BigInt(565)+BigInt(6675);
let e = null;
let f = undefined;
let g = Symbol("hello");

console.table([a, b, c, d, e, f, g]);

let num1 = 987765;
console.log(num1)

let str1 = String(num1);
console.log(str1)

console.log(typeof(str1))


function add(a,b){
    return a+b
}
console.log(add(3,6))