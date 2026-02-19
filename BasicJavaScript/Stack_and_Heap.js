
// stack memory example 
let myname = "rbpatade@gmail.com"
let anothername = myname
anothername = "nik@gmail.com"

console.log(myname)
console.log(anothername)


//Heap memory example
const user1 = {
    name:"ram",
    age:24
}

const user2 = user1;
user2.name = "sham"

console.log(user1);
console.log(user2);





