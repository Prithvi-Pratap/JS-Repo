const prompt=require("prompt-sync")();
// let age=prompt("Enter your age!");
// if(age<20 && age>10){
//     console.log("age is between 10 and 20");
// }
// else{
//     console.log("age is not between 10 and 20")
// }

//problem 2:

// let age=prompt("Enter your age: ");
// switch(true){
//     case (age<12 && age>0):
//         console.log("you are underage")
//         break
//     case (age>19 && age<12):
//         console.log("you are a teenager")
//         break
//     case (age>20 && age<40):
//         console.log("you are an adult")
//         break;
//     default:
//         console.log("you are a senior citizen")
// }

// problem 3:


let a= prompt("Enter the number:");
a=parseInt(a);
if(a%2==0){
    console.log ("the number is divisible by 2");
}
else if(a%3==0){
    console.log ("the number is divisible by 3");
}
else{
    console.log("the number is nor divisible by 2 neither by 3")
}