//square
let numbers = [1,2,3,4]
let sq = numbers.map(num => num * 2)
console.log(sq)

//uppercase
let names = ["alice", "bob", "charlie"];
let upperNames = names.map(name => name.toUpperCase());
console.log(upperNames);

// array of object
let students = [
    {name: "Alice", marks: 50},
    {name: "Bob", marks: 60}
];
let marks = students.map(student => ` ${student.name} ":" ${student.marks} `);
console.log(marks);


