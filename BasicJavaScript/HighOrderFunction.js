function greet(name, formatter){
    console.log("Hello! " + formatter(name))
}

function captallize(name){
    return name.toUpperCase()
}

greet("Ram" , captallize)


// function calculator(a,b,operation){
//     console.log("Result:" + operation(a,b))
// }

// function addition(a,b){
//     return a+b
// }

// calculator(6,7,addition)


//for each
// let numbers = [10,20,30,40,50]
// numbers.forEach(function(num){
//     console.log(num)
// })

// let fruits = ["Apple","Banana","Mango"]
// fruits.forEach(function(index,fruit){
//     console.log(index,fruit)
// })

// let students = [
//     {name: "Alice", age: 20},
//     {name: "Bob", age: 22},
//     {name: "Charlie", age: 21}
// ];

// students.forEach(function(student){
//     console.log(student.name,student.age)
// })


//map
// let numbers = [1,2,3,4,5]
// numbers.map(function(num){
//     console.log(num * num)
// })

//Square 
// let numbers = [1,2,3,4,5]
//  let square = numbers.map(num => num *2)
//  console.log(square)

//uppercase
// let name = ['apple','mango','banana']
// let uppercase = name.map(name => name.toUpperCase())
// console.log(uppercase)

// let myMap = new Map();
// let anotherMap = new Map([
//     ['name', 'GFG'],
//     ['age', 30],
//     ['city', 'Noida']
// ]);
// console.log(anotherMap);

// const myMap = new Map()

// //set
// myMap.set('name','ram')
// myMap.set('age',25)
// myMap.set('city','Mumbai')

// //get
// console.log(myMap.get('name'))
// console.log(myMap.get('age'))

// //has
// console.log(myMap.has('name'))

// //delete
// console.log(myMap.delete('city'))

// //clear
// myMap.clear()

// console.log(myMap.has('name'))
// console.log(myMap)


//filter 

// let numbers = [1,2,3,4,5,6,7,8]
// let Even = numbers.filter(function(num){
//     return num % 2 == 0
// })
// console.log(Even)

// let numbers = [1, 2, 3, 4, 5];
// let oddNumbers = numbers.filter(function(num){
// return num % 2 !== 0});
// console.log(oddNumbers);

// let numbers = [1,2,3,4,5,6,7,8,9,10]
// let greaterno = numbers.filter(function(num)
// {
//     return num > 5
// })
// console.log(greaterno)

// const books = [
//     {
//         name :"book1", genre : "friction", publish: 1981, edition: 2004
//     },
//     {
//         name :"book2", genre : "Non-friction", publish: 1983, edition: 2006
//     },
//     {
//         name :"book3", genre : "History", publish: 1985, edition: 2008
//     },
//     {
//         name :"book4", genre : "Science", publish: 1987, edition: 2000
//     },
//     {
//         name :"book5", genre : "History", publish: 1989, edition: 2002
//     },
//     {
//         name :"book6", genre : "friction", publish: 1990, edition: 2000
//     }]

//     let bnames = books.filter((bk) => bk.name === 'book1')
//     console.log(bnames)

//reduce 
let number = [1,2,3,4,5]
let arr = number.reduce(function(h1,h2){
    return  h1 + h2
})
console.log(arr)

