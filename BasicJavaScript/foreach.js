//for each Loop through numbers
let numbers = [10,20,30,40,50]
   numbers.forEach(function(num)
{
    console.log(num)
})

//Loop through fruits with index
let fruits = ["Apple","Banana","Mango"]
    fruits.forEach(function(fruits,index){
        console.log(index, ":" ,fruits)
    })

// using arrow function
let num = [10,20,30,40]
 num.forEach(num => console.log(num*2))

//Loop Through Array of Objects

let students = [
    {name: "Alice", age: 20},
    {name: "Bob", age: 22},
    {name: "Charlie", age: 21}
];

    students.forEach(students => console.log(`${students.name}  is a  ${students.age} years old`))