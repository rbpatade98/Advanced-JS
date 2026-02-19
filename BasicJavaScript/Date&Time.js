let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.getDate())
console.log(myDate.getFullYear())
console.log(myDate.getMonth())
console.log(myDate.getHours())
console.log(myDate.getMinutes())
console.log(myDate.getSeconds())
console.log(myDate.getMilliseconds())

let createDate = new Date(2026,0,21)
console.log(createDate.toDateString())
console.log(createDate.toLocaleString())

console.log(createDate.toLocaleString('default',{weekday:"long"}))


let now = new Date();
console.log("Year:", now.getFullYear());
console.log("Month:", now.getMonth() + 1); // add 1 to display 1-12
console.log("Day of Month:", now.getDate());
console.log("Day of Week:", now.getDay());

let Today = new Date();
Today.setFullYear(2030);
Today.setMonth(11); // December
Today.setDate(25);
console.log(Today); // Thu Dec 25 2030 ...


let bithday = new Date("1998-10-27");
let today = new Date();

let age = today.getFullYear() - bithday.getFullYear();
console.log(`my age is ${age}`)