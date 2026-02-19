// // const map = new Map();
// // map.set("IN","India")
// // map.set("USA","United State Of America")
// // map.set("FR","France")
// // // console.log(map)

// // for (let [keys,values] of map){
// //     console.log(keys, ":" ,values)
// // }


// // const obj = {
// //     game1: "NFS",
// //     game2: "spderman"
// // };

// // for (let [key, value] of Object.entries(obj)) {
// //     console.log(key, ":", value);
// // }


// const mylang = {
//     HTML : "hypertest markup language",
//     CSS : "cadcading style sheet",
//     JS : "javascript"
// }

// for (let key in mylang){
//     console.log(key)
//     console.log(mylang[key])
//     console.log(mylang)
// }

// const coding = ["html","css","js","java","python"]

// //function
// coding.forEach(function (items) {
//     console.log(items)
// })

// //arrow fun
// coding.forEach((val)=>{
//     console.log(val)
// })

// const number = [1,2,3,4,5,6,7,8,9,10]
// const result = number.filter((num)=> num > 4)
// console.log(result)

// const mynum = [1,2,3,4,5,6,7,8,9,10]

// const result = mynum.map((num) => num +10)
// console.log(result)

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
//     }


// ]


// let userbook = books.filter((bk) => bk.genre === 'History')

// console.log(userbook)

// userbook = books.filter((bk) => bk.genre === 'History' && bk.publish === 1985)
// console.log(userbook)






































// const shoppingcart = [
//     {
//         itemname : "js cource",
//         price : 2000
//     },
//     {
//         itemname : "python cource",
//         price : 5000
//     },
//     {
//         itemname : "java cource",
//         price : 7000
//     },
//     {
//         itemname : "data science cource",
//         price : 10000
//     }
// ]

// const pricetopay = shoppingcart.reduce((acc,item) => acc + item.price,0)
// console.log(pricetopay)