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

// let fName="prithvi pratap";
// console.log(fName.__proto__);


// console.log(fName.length);
// console.log(fName.toLocaleLowerCase()); //for locale regional language, which has different character codes 
// console.log(fName.toLowerCase());
// console.log(fName.toLocaleUpperCase()); 
// console.log(fName.toUpperCase());
// console.log(fName.charAt(4));
// console.log(fName.indexOf('t',5)) //argument1:string to search,argument2:index no. from which search starts, if arg2 vacant then search will start from beginning


// const strTurkish = "İstanbul";

// console.log(strTurkish.toLowerCase());        // Output: "i̇stanbul"
// console.log(strTurkish.toLocaleLowerCase());  // Output: "istanbul" (based on locale)

// let newString="pratap"

// let anotherString=newString.substring(0,4) //if the starting index> ending index => swaps the indexes

// //eg. .substring(6,0)=>.substring(0,6);

// console.log(anotherString)
// // console.log(newString.length)

// anotherString=newString.slice(-4,4)// we can provide -values.(count the negative values from index 0)

// console.log(anotherString)



//slice method
//If indexStart >= str.length, an empty string is returned.

// const str = "pratap";

// const sliced = str.slice(2, -5); //op:empty string

// console.log(str.length)
// console.log(sliced)



//eval() function: is used to execute js code passed as string to eval(), eval() expects primitive string as i/p, but if we provide string object it will return the string object;
// string object can be converted to its primitive counter part using valueof() method

// const s1 = "2 + 2"; // creates a string primitive
// const s2 = new String("2 + 2"); // creates a String object
// console.log(eval(s1)); // returns the number 4
// console.log(eval(s2)); // returns the string "2 + 2"
// console.log(eval(s2.valueOf()));


// .trim() : it removes the white spaces , tabs from the both the ends of the string. it doesn't modify the original string , it returns the new string with the whitespaces removed

// const name="   prithvi pratap   "; //note: it doesn't remove the whitespace within the string
// console.log(name.trim());


//inorder to remove all the white spaces we can use replace() method

// .replace(): it replaces the specific substring or pattern from the string with specified substring or value

// console.log(name.replace(/\s+/g,"")); //  /\s/ is a regular expression that matches any whitespace character, + is a quantifier that means "one or more occurrences.

// console.log(name.replace('pra','tap'))


//eg 2:
// const url="https://pratap.com/prithvi%20pratap/"
// console.log(url.replace('%20','-')); // replaces %20 with -


// .includes() : return true or false based on the substring present or not

const name= "honey-prithvi-pratap" 
console.log(name.includes('prith')) // return true or false


// .split() : splits into substrings and return a array of the splited values

console.log(name.split('-'))