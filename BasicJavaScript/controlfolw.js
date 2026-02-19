//if
const age = 18;
if(age >=18)
{
    console.log("you are an adult")
}

//if-else
const score = 40;
if(score >= 40){
    console.log("you are passed");
}
else {
    console.log("you are failed")
}

//if else if else

    let marks = 85
    if (marks >= 90){
        console.log("Grade A")
    }
    else if(marks >= 75){
        console.log("Grade B")
    }
    else if(marks >= 50  ){
        console.log("Grade C")
    }
    else{
        console.log("You are falied!")
    }
    

//switch

const day = "Sunday";

switch(day) {
    case "Monday":
        console.log("Monday");
        break;

    case "Tuesday":
        console.log("Tuesday");
        break;

    case "Wednesday":
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid Day");
}
