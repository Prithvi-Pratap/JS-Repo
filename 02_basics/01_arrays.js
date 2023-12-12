const myArr=[22,23,24,25,26,27,28,29,30];
const myArr2=['honey','prithvi','pratap','abhishek'];
const myArr3= new Array(11,22,33);

// console.log(myArr3);
// console.log(typeof myArr[3]);
// console.log(myArr2)
// console.log(myArr2)

//---------------methods----------------
//1.push():
myArr2.push("mayank");

//2.pop():
myArr2.pop();

//3.unshift():
myArr2.unshift("mayank");
// console.log(myArr2);

//4.shift():
myArr2.shift();
// console.log(myArr2);


/*
'shallow copy' and 'deep copy'

shallow copy:a shallow copy replicates the top-level structure, but for nested structures (objects, arrays), it copies references to the same nested structures found in the original object. This means changes to the properties of those nested structures are reflected in both the original and the shallow copy.

Deep copy: a deep copy creates a new object and recursively copies all nested structures within the original object . it results in a completely independent copy where changes to the copied object do not affect the original , and vice versa;

*/


//5.slice()  :it returns a shallow copy of the sliced portion of the original array;

const newArray=[
    {name:'honey',marks:[90,91,92]},
    {name:'prithvi',marks:[80,90,99]},
    {name:'pratap',marks:[88,99,100]}
]

let shallowCopy=newArray.slice(0,2);

shallowCopy[0].name='mayank';
shallowCopy[0].marks=[80,80,80];

// console.log("original:",newArray);
// console.log("copy:",shallowCopy);
/*
op:

original: [
  { name: 'mayank', marks: [ 80, 80, 80 ] }, //changed in the original array
  { name: 'prithvi', marks: [ 80, 90, 99 ] },
  { name: 'pratap', marks: [ 88, 99, 100 ] }
]
copy: [
  { name: 'mayank', marks: [ 80, 80, 80 ] },
  { name: 'prithvi', marks: [ 80, 90, 99 ] }      //last indexed element is excluded
]

*/

//6.splice():modifies original array,and returns the spliced array

//syntax: array.splice(start,deleteCount,item1,item2,...);

//this method is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place.It's a versatile method that provides a way to modify arrays directly.

//start: the index at which to start changing the array. if -ve , it will begin that many elements from the end of the array;

//deleteCount: the number of elements to remove,if set to 0, no elements will be removed.if omitted , all elements will be removed from start to end

//item1,item2: elements to add to the array , if you don't want to add any elements, can omit these.


//removing elements:

const fruits=['apple', 'orange', 'banana','kiwi', 'grapes'];

const removedFruits=fruits.splice(1,2);
// console.log("removedFruits:",removedFruits)
// console.log("all fruits:",fruits)
//----------------------------------------------------

//adding elements:

const number=[1,2,3,4];

//adding 'a','b','c' starting from index 2
number.splice(2,0,'a','b','c');
// console.log(number)  //[1,2,'a','b','c',3,4]
//-----------------------------------------------------

//replacing elements:
const colors=['black','red','olive','orange'];
// console.log("original:",colors)
let spliceColors=colors.splice(1,1,'yellow');
// console.log("replaced:",colors);
// console.log("spliced colors:",spliceColors)

//----------------------------------------------------


//7.concat():combines two arrays and returns a new array; does not modify the original array

let marvelHeros=['thor','ironman','hulk'];
let dcHeros=['superman','batman','flash'];

let allHeros=marvelHeros.concat(dcHeros);
// console.log("allHeros:",allHeros)


//8.spread operator (...array1,...array2):combines two or more arrays and returns a new array
allHeros=[...marvelHeros,...dcHeros]
// console.log("allHeros:",allHeros)


//9.flat(depth):flatten an array by one level. it returns a new array with all the subarray concatinated into it upto the specified depth. by default the depth is 1. If you want to flatten the array entirely, you can use Infinity as the depth
const nestedArray=[1,2,3,[4,5],6,7,[8,[9,10]]];
const flattenArray=nestedArray.flat(Infinity)
// console.log("nestedArray:",nestedArray);
// console.log("flattenArray:",flattenArray);



//10.from(): this is a static function,it can be invoked via constructor call(i.e. using 'Array' keyword). it creates a new , shallow copied array from an array-like or iteratable object. The primary function of the `Array.from()`is to convert objects that are not actual arrays into arrays

//syntax: Array.from(arrayLike[,mapFunction[,thisArg]]);

//arrayLike: iteratable object to convert to an array
//mapFunction: (optional) mapping function that can  be applied to each element of the array
//thisArg: (optional)an optional object to use as  `this` when executing the `mapFunction`;

const str="hello";
const charArray=Array.from(str);
// console.log(charArray) //from is used to convert string into an array of its characters

//create an array from an iteratable

const iterable=new Set([1,2,3])
const newArr=Array.from(iterable);
// console.log(newArr)

//----------------------------------------


//11.of():it is a static method. it is used to create a new array of variable number of arguments, i.e. it can create a array from a set of values
//syntax: Array.of(element1, element2,element3,...)

let num1=100;
let num2=200;
let num3=300;
let newStr='honey';

const myarr=Array.of(num1, num2, num3,newStr);
console.log(myarr);