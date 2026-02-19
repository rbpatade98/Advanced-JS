// let name = "RAM";        
// let greeting = 'Hello'; 

// const name1 = "Ram"
// const emailId = "ram@gmail.com"

// console.log(`My name is ${name1} and my emailid is ${emailId}` )//string interpolation


//  
// console.log(userId[0])
// console.log(userId.__proto__)
// console.log(userId.length)
// console.log(userId.toUpperCase())
// console.log(userId.toLowerCase())
// console.log(userId.charAt(2))
// console.log(userId.indexOf('p'))



let str = "Hello Javascript"
console.log(str.length) //To get the number of characters in a string

//Accessing characters
console.log(str[0]) // Accessing character using index
console.log(str.charAt(1))//used to get the character at a specific position (index) in a string

//Changing case
console.log(str.toUpperCase()) //Convert string to uppercase.
console.log(str.toLowerCase()) //convert string to lowecase.

// Searching in a string
console.log(str.indexOf('script'))//used to find the position (index) of a value inside a string.
console.log(str.includes('HTML'))//used to check if a value exists inside a string or array. It returns true if found, and false if not.
console.log(str.startsWith('java'))//Checks if a string starts with a certain value.Returns true or false
console.log(str.endsWith('script'))//Checks if a string ends with a certain value.Returns true or false.

//Extracting parts of a string
console.log(str.substring(0,5))//Extracts a part of a string and returns it as a new string.
console.log(str.slice(0,5))//Extracts a part of a string and returns it as a new string.

//Replacing
console.log(str.replace('Hello','hi'))//Replace a substring with another string.

//Splitting 
console.log(str.split("s", 2))

// Trimming 
console.log(str.trim(""))//Remove spaces at the start and end.
console.log(str.trimStart(""))//remove te space from start.
console.log(str.trimEnd(""))//remove te space from start.

console.log(str.repeat(3))