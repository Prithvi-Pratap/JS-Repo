//Generator function:it's a special type of function , that allows to control the flow of execution, it produces series values over time, and you can pause and resume its execution , the 'yield' keyword is used to produce temporary values and pause the execution.
//function* myGenerator() {
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//   }

//   const generator = myGenerator();

//   console.log(generator); // Object [Generator] {}

//   console.log(generator.next()); // { value: 1, done: false }
//   console.log(generator.next()); // { value: 2, done: false }
//   console.log(generator.next()); // { value: 3, done: false }
//   console.log(generator.next()); // { value: 4, done: false }
//   console.log(generator.next()); // { value: undefined, done: true }


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//methods of string

// const name="Prithvi Pratap"
// const email="pratapprithvi768@gmail.com"

// let str=`I'm ${name}, my mail ID is ${email}`;
// console.log(str)

//=====methods=======

// let brand=new String('Pratap $ brothers');
// console.log(brand.length)

//NOTE: we can access and use the properties and method of string object in primitive string literals

let fName="prithvi pratap";
// console.log(fName.__proto__);


// console.log(fName.length);
// console.log(fName.toLocaleLowerCase()); //for locale regional language, which has different character codes 
// console.log(fName.toLowerCase());
// console.log(fName.toLocaleUpperCase()); 
// console.log(fName.toUpperCase());
// console.log(fName.charAt(4));
console.log(fName.indexOf('t',5)) //argument1:string to search,argument2:index no. from which search starts, if arg2 vacant then search will start from beginning


// const strTurkish = "İstanbul";

// console.log(strTurkish.toLowerCase());        // Output: "i̇stanbul"
// console.log(strTurkish.toLocaleLowerCase());  // Output: "istanbul" (based on locale)












