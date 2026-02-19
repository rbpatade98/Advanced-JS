/*
console.log("03_Javascript tutorial Var,let,Const");

var a = "Apple"
var a = "Orange"
let b = "Ram"
const Author = "Swami"
// Author ="Mukul"
{
    // var a ="Apple"
    let a ="Bannana"
    let b ="Sham"
    const Author = "Vivek"
    console.log(a);
    console.log(b);
    console.log(Author);

}
console.log(a);
console.log(b);
console.log(Author);

*/

/* var
Can be redeclared
Can be reassigned

let
cannot be redeclared.
but it can be reassigned.
*/

/*var example

// var x = 10;          // declared
// x = 20;              // reassigned / updated
// var x = 30;          // redeclared
// console.log(x);      // 30

// {
//     var x = 14
//     var y = 5;         // block level
//     y = 6;
//     console.log(x); 
// }
// console.log(y);      // 5 (var is not block scoped)


// let example

// let a = 10;          // declared
// a = 20;              // reassigned / updated
// // let a = 30;       // cannot redeclare
// console.log(a);      // 20

// {
//   let b = 5;         // block level
//   a = 30;
//   console.log(b);    // 5
//   console.log(a); 
// }
// console.log(b);   // block scoped


// const example

const c = 10;        // declared
// c = 20;           // cannot reassign
// const c = 30;     // cannot redeclare
console.log(c);      // 10

{
  const d = 5;       // block level
  console.log(d);    // 5
  console.log(c);
}
// console.log(d);   // block scoped
*/

// var
/*
var
Function scoped → works inside the whole function.
Can be declared → you can create it.
Can be redeclared → same name can be used again.
Can be reassigned → value can be changed.

let

Block scoped → works only inside { }.
Can be declared → you can create it.
Cannot be redeclared → same name not allowed again in same scope.
Can be reassigned → value can be changed.

const

Block scoped → works only inside { }.
Can be declared → you can create it.
Cannot be redeclared → same name not allowed again.
Cannot be reassigned → value cannot be changed.
*/


const acccountId = 1000
let emailId = "ram@gmail.com"
var Password = "Qwerty"
accountCity = "Mumbai"
let accountState;



//acccountId = 2 // not Allowed
console.log(acccountId);

emailId = "rampatade@gmail.com"
Password = "Asdfgh"
accountCity ="Delhi"
var Password = "Zxcvbn"  //redeclared

console.table([acccountId, emailId, Password, accountCity, accountState]);




