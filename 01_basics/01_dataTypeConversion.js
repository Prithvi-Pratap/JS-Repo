// let score="33";
// console.log(typeof score);

// //to convert it in number
// let inNumber= Number(score);

// console.log(typeof inNumber);
// console.log(inNumber);
// console.log("---------------------------------------")
// //suppose the score variable doesn't contain the  pure number value
// let score2="22ab";
// let inNumber2=Number(score2);
// console.log(typeof(inNumber2)); //it will show number but the converted number will be NaN
// console.log(inNumber2)// NaN

// conversion of NULL
// let score3=null;
// console.log(typeof score3)//O/p-> object
// score3=Number(score3)
// console.log(typeof score3);
// console.log(score3);// null=> converted into 0

//conversion of undefined via Number method;

// let score4=undefined;
// console.log(typeof(score4));
// score4=Number(score4);
// console.log(typeof(score4));
// console.log(score4) // undefined=> converted into NaN

//converting pure string

// let str="honey"
// str=Number(str);
// console.log(typeof str);
// console.log(str); // string=> converted into NaN

//conversion of NaN
// let nan=NaN;
// console.log(typeof nan)
// console.log(nan)
// nan=Number(nan);
// console.log(typeof nan)
// console.log(nan)

//Conversion of boolean
let isbool=134125;
isbool=Boolean(isbool)
console.log(typeof isbool)
console.log(isbool)

//results

//"33"=> number
//"22ab"=> type is number, but value is NaN
//null=> 0
//undefined=> type is nuber, but value is NaN
//string "honey"=> type is number, but value is NaN
//NaN=> itself of type number, after conversion also number and value is NaN


//conversion in boolean from
//0=>false
//1=>true
//2343=>true ( true for any other number apart from 0)

// empty string =>false
// some string =>true