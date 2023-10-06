/*functions definitions using various ways*/

/*function declaration using funtion keyword*/

function funct1(x,y){
    console.log("this is function declaration using funtion keyword")
}

funct1();

 
/*funtion creation using Arrow function:*/

const funct2= () => {
    console.log("no return function called");
    return "hi";
}

let  a=funct2();
console.log(a);
// console.log(funct2())


/*function Expression*/

//anonymous function 

const sum=function(a,b){
    return a*b;
}


console.log(sum(4,5));


/*functions declarations using function constructor*/

const funct4= new Function("a","b","return a*b");
console.log(funct4(2,4));



/*function hoisting */


console.log(myFunction(4));

function myFunction(y) {
  return y * y;
}

