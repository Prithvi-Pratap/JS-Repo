//fundatmental data type , used to represent and organise data in the form of key value pairs;

//object creation: 1.literal notation 
                 //2.constructor notation 
            
//1.literal notation:

let person1={
    name:'prithvi',
    age:20
}
// console.log(person1)

//2.constructor notation:
let person2=new Object();
person2.name='Pratap';
person2.age=21;
// console.log(person2)


//adding and deleting properties:
const person={};

//adding:
person.name="Honey";
person.age=20;
person.isStudent=true;
// console.log(person);//accessing

//deleting:
// delete person.isStudent;
// console.log(person);

//storing function as object properties:
person.greet=function(){
    console.log(`hello ${this.name} !`)
}

person.greet();

//object methods:

//1.Object.keys(obj):returns an array containing the names of all enumerable properties of the object.
//2.Object.values(obj):returns an array containing the values of all enumerable properties of the object.
//3.Object.entries(obj): returns an array containing array of key-value pairs.

// NOTE:enumerable means the properties which can be iterated in a `for in` loop;
//can make a property non-enumerable by using Object.defineProperty() or Object.defineProperties() with the enumerable property descriptor set to false.    

let keyArray=Object.keys(person);
let ValueArray=Object.values(person);
let keyValueArray=Object.entries(person);

// console.log(keyArray)
// console.log(ValueArray)
// console.log(keyValueArray)

//non-enumerable property:
Object.defineProperty(person,'pincode',{
    value:828306,
    enumerable:false
})

//method to determine the specific property is present or absent: .hasProperty('name')
//regardless of the enumerability of the property
console.log(person.hasOwnProperty('pincode'))