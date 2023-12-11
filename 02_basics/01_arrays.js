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
console.log("original:",colors)
let spliceColors=colors.splice(1,1,'yellow');
console.log("replaced:",colors);
console.log("spliced colors:",spliceColors)