//on the basis of storing and accessing the variables, data types are categorised in two types:
//A. Primitive Data Type:there are 7 primitive data types

    //1.number
    //2.null
    //3.symbol
    //4.string
    //5.boolean
    //6.bigInt
    //7.undefined

//B.Non-primitive(reference type): Array, object, function
// let arr=["honey","prithvi","pratap"]; //array
 
// const var1={
// type:"Fiat", 
// model:"500",
// color:"white"
// };
//anycode under a curly braces is object

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack-(primitive), heap(non-primitive)

// stack=> the value is passed as a copy of the original value 
// heap=> the value is passed by reference, so the change in the variable will result in the change in the original value.

//example of stack-doesn't change the original value
// let str="honey"
// let anotherStr=str;

// anotherStr="prithvi"
// console.log(str)
// console.log(anotherStr)

//example of heap memory

// let obj= {
//     name:"prithvi",
//     email:"pratapprithvi768@gmailcom",
//     username:"prithvi-pratap"
// };

// let anotherObj=obj;
// anotherObj.name="honey" //changes the value in original object

// console.log(obj.name)
// console.log(anotherObj.name)

//another example of pass by reference

let arr=[1,2,3,4,5]

let anotherArr=arr;

anotherArr[3]=10; //changes the value of  arr 
console.log(arr)  //[1,2,3,10,5]
console.log(anotherArr)  //[1,2,3,10,5]

//example of copying the reference values

// let arr=[1,2,3,4,5]

// let anotherArr=[...arr] //copying the reference value

// anotherArr[3]=10;
// console.log(arr)
// console.log(anotherArr)