const score=400;
// console.log(score);

const balance=new Number(100);
// console.log(balance);

//++++++++++++++++METHODS+++++++++++++++++++++

// 1.valueOf(): returns the value of the number object

const num=balance.valueOf();
// console.log(num);
// console.log(typeof num);


// 2.toString(): returns the number in string,applicable in all kind of numeric values

// console.log(balance.toString());
// console.log(typeof balance.toString());
// console.log(Number.MAX_VALUE)


//3. toExponential(); ---returns a string , with number rounded and written in exponantial format

// console.log((1123).toExponential(1));// can give arguments (optional)


//*4. toFixed(): method to format a number in fixed point notation, this return a string representing the given number formatted with a specified number of digits after the decimal points.

// console.log((12004.09375).toFixed(3)); //truncate and round off the the last digit.

//*parseFloat(); returns a floating point number , convert the string in floating point format, it is the global function of JS, ignores the string inserted;

console.log(parseFloat("546.336"));
console.log(typeof parseFloat('1234abcfgsadgd'))


// //*5. toPrecision(): returns a string, with a number written with specified length. //leads to error, significant difference in original value...the parameter value must be between 1 and 21

// //a big problem with toPrecisio(): give unexpected error in too high precision values, and same goes with the toFixed();

// const anotherNum=(12345.6789).toPrecision(3);
// // console.log(anotherNum)
// // console.log(parseFloat(anotherNum));
// // console.log(.3.toPrecision(45)


// //*6. toFixed():
// //returns a string that represents a number with specified number of digits after decimal point;
// let temp="34.7452 degree celcius";

// console.log(parseFloat(temp).toFixed(2));

// console.log(parseFloat(temp).toFixed(55));// for high precision number, it may give unexpected results;

// const number=45.634;
// console.log(number.toFixed(6));// default  argument is 0
// console.log(number.toPrecision(1));


//*7. toLocaleString():
// console.log("1006000353".toLocaleString());
// console.log(typeof (num.toLocaleString('en-IN')));