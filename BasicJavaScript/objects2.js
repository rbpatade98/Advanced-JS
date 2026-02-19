const tinderuser = new Object()
console.log(tinderuser)

tinderuser.id = 101;
tinderuser.name ="Ram";
tinderuser.isLoggedIn = false;
console.log(tinderuser) 


const newuser = {
    userid : 101,
    fullname :{
        firstname:"Ram",
        lastname:"patade"
    }

}
console.log(newuser)
console.log(newuser.fullname)
console.log(newuser.fullname.firstname)
console.log(newuser.fullname.lastname)

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

const obj4 = Object.assign({}, obj1, obj2, obj3);

console.log(obj4);

const obj5 = {obj1,obj2}
console.log(obj5)

const obj6 = {...obj1,...obj2,...obj3}
console.log(obj6)