//+++++++++++++++++++++ MATH ++++++++++++++++++++++++++++++

//#1. Math.abs(); return absolute value of argument passed 

const negNum=-87.883750;
const posNum=87.883750;
// console.log(Math.abs(num));


//#2. Math.round(); it will round the number to the nearest integer

// console.log(Math.round(negNum));
// console.log(Math.round(posNum));


//#3. Math.ceil(); it will round the number upto the nearest integer

// console.log(Math.ceil(negNum));
// console.log(Math.ceil(posNum));



//#4. Math.floor(); it will round the number down to the nearest integer

// console.log(Math.floor(negNum));
// console.log(Math.floor(posNum));



//#5. Math.max(x,y,z,...); it will return the maximum value;

// console.log(Math.max(20,23,1,8,-2,0));



//#6. Math.min(x,y,z,...); it will return the minimum value;

// console.log(Math.min(20,23,1,8,-2,-3.4));



//#7. Math.pow(x,y); it will return x raised to the power of y;

// console.log(Math.pow(2,4));
// console.log(Math.pow(2,-4));



//#8. Math.sqrt(x); it will return square root of x;

// console.log(Math.sqrt(16));
// console.log(Math.sqrt(2));



//#9. Math.sin(x); it will return the trigonometric sine of x in radians;

// console.log(Math.sin(Math.PI/2));



//#9. Math.cos(x); it will return the trigonometric cosine of x in radians;

// console.log(Math.cos(Math.PI/2)); // give the value close to zero coz of floating point error



//#9. Math.tan(x); it will return the trigonometric tangent of x in radians;

// console.log(Math.tan(Math.PI/2)); // give the value close to zero coz of floating point error



//#10. Math.random(); it will return a random value : 0<= random number <1

// console.log(Math.random());

//to get values greater than 1 we need to multiply by 10 and add 1 in order to not to get 0;

// console.log((Math.random()*10) + 1);

// to get a exact lower value, use floor function

// console.log(Math.floor(Math.random()*10) + 1);


// => to get a value between some limits
// let's say min=10 and max=20;

//logic behind a dice

const min= 1;
const max= 6;

console.log(Math.floor(Math.random()*(max-min + 1)) + min);