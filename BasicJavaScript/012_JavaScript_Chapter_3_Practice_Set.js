let marks = {
    ram: 90,
    sham: 80,
    sid: 89,
    seeta: 78,
    geeta: 67
};

// let keys = Object.keys(marks);

// for (let i = 0; i < keys.length; i++) {
//     console.log("The marks of " + keys[i] + " are " + marks[keys[i]]);
// }

// using for in 
// for (let name in marks) {
//     console.log("The marks of " + name + " are " + marks[name]);
// }

// using for of
for (let [name, score] of Object.entries(marks)) {
    console.log("The marks of " + name + " are " + score);
}