//printing the marks of student in object using for in loop

// const marks={
//     abhi:89,
//     honey:87,
//     mayank:89

// };

// for(let i in marks) {
//     console.log("marks of "+i+" is "+marks[i])
// }

//using for loop

// for(let i=0; i<Object.keys(marks).length;i++){
//     console.log("marks of "+Object.keys(marks)[i]+" is "+marks[Object.keys(marks)[i]]);
// }


//question 2:

const prompt=require("prompt-sync")();

// const cNum=5021;

// let input;
// do{
//     input=prompt("enter the correct number");

// }while(input!=cNum);

// console.log("congo! You have entered the correct number");

// Question 3;

// function mean(sum){
//     console.log(sum/5);
// }
// let sum=0;
// for(let i=0;i<5;i++){
//     sum+=parseInt(prompt("enter the number "+(i+1)+":"))
// }

// mean(sum);

//arrow operator:(passing a string elements)
//storing the input as a string e.g:55555
//applicable only in case of single digit numbers

const mean=(a,b,c,d,e)=>{
    return (a+b+c+d+e)/5;
};

let input="";
for(let i=0;i<5;i++){
    input+=prompt("enter the number "+(i+1)+":");
}

console.log(input)
let ans=mean(parseInt(input[0]),parseInt(input[1]),parseInt(input[2]),parseInt(input[3]),parseInt(input[4]));
console.log(ans);