let myArr = [1,2,3,4,5]
console.log(myArr);

console.log(myArr.push(1))

let fruits = ["apple","banana","mango"]
console.log(fruits)
console.log(fruits[2])
console.log(fruits[-1])

fruits[0] = "kiwi"
console.log(fruits[0])

console.log(fruits.length)

fruits.push("papaya")
console.log(fruits)

fruits.pop()
console.log(fruits)

fruits.unshift("orange")
console.log(fruits)

fruits.shift()
console.log(fruits)

fruits.splice(1, 1, "Papaya");
console.log(fruits);

console.log(fruits.indexOf("mango"))
console.log(fruits.indexOf("jackfruit"),"---------------------------")

console.log(fruits.includes("mango"));
console.log(fruits.includes("jackfruits"))

let num = [1,2,3,4,5]
let greater = num.find(n => n > 2)
console.log(greater)

let index = num.findIndex(n => n > 4);
console.log(index);

let arr1 = [4,5,6]
let arr2 = [1,2,3]
console.log(arr1.concat(arr2))

let letters = ["a","b","c"]
console.log(letters.join(""))

let arr = [1,2,3];
arr.reverse();
console.log(arr);


let arr3 = [3,1,2];
let sort = arr.sort();
console.log(sort);

console.log(Array.isArray([1,2]));
console.log(Array.isArray(123));

let arrr1 = [1,2];
let arrr2 = [3,4];
let merged = [...arrr1, ...arrr2];
console.log(merged);

let strArr = [..."Hello"];
console.log(strArr);
