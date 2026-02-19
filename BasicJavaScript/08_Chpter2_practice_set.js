
// Step 3: Import readline
const readline = require("readline");

// Step 3: Create interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



rl.question("Enter a number: ", function(input) {
    const num = Number(input);

    if (num > 0) {
        console.log("Positive number");
    } else if (num < 0) {
        console.log("Negative number");
    } else if (num == 0) {
        console.log("Zero");
    } else {
        console.log(Invalid)
    }



    rl.close();
});

