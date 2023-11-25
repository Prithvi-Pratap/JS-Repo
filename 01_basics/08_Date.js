let myDate = new Date(); //myDate is an instance of Date object. And getDate(),getMonth(), getYear() are the methods of the Date object;

// months in JS starts from 0 to 11;

// console.log(myDate); //not readable completely
//convert in string
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.getDate(),myDate.getMonth(),myDate.getFullYear()); // methods can also be used to get the specific value;


// let anotherDate= new Date(2023,10,23);
// let anotherDate2= new Date("2013-09-10T13:24:00");
// console.log(anotherDate2.toDateString());

// let myNewDate= new Date(2023,11,25);
// let myNewDate2= new Date("2023-12-25");
// console.log(typeof myNewDate);
// console.log(myNewDate);
// console.log((myNewDate2.getDay())); // returns the number of the day


let myNewDate3 = Date.now();
// console.log(myNewDate3);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//                         ========== METHODS ==========

// #1. methods for getting components of a date:

// getDay(), getMonth(), getFullYear(), getHours(), getMinutes(), getSeconds();


// let date = new Date();

//    console.log(date.getDay());

//    console.log(date.getMonth() + 1);

//    console.log(date.getFullYear());

//    console.log(date.getHours());

//    console.log(date.getMinutes());

//    console.log(date.getSeconds());


// #2. methods for setting components of a date:

// setDate(), setMonth(), setFullYear(), setHours(), setMinutes(), setSeconds(), setMilliseconds();

const newDate= new Date();
console.log(newDate.toString());

// newDate.setDate(20);
// newDate.setMonth(1);
// newDate.setFullYear(2002);
// newDate.setHours(12);
// newDate.setMinutes(50);

// console.log(newDate.toString());



// #3.Methods to format date and time: 

// toDateString(): Get a human-readable date string.
// toISOString(): Get a string in the format 'YYYY-MM-DDTHH:mm:ss.sssZ'.
// toLocaleString(): Get a localized string representing the date and time.
// toLocaleDateString(), toLocaleTimeString(): Get localized date or time strings.


// console.log(newDate.toISOString());
// console.log(newDate.toDateString());
// console.log(newDate.toLocaleString('default',{
//     timeZone: 'Asia/kolkata',
// }));


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//problem : print the the date, time and day in local time zone

const localDate= new Date();
let toIST={
    timeZone: 'Asia/kolkata'
}
let dayOfWeek= ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];

console.log(localDate.toLocaleString('en-IN',toIST),dayOfWeek[localDate.getDay()]);