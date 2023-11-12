// console.log("2">2)//conversion of string occurs
// console.log("2"==2) //converted into number
// console.log("2"<2)

// console.log(null==0)//null is not converted to any number
// console.log(null>0)
// console.log(null<0)
// console.log(null>=0) //the comparision operator converts the 'null' into 0
//i.e., null=0 => 0>=0 => true

// console.log(undefined==0)
// console.log(undefined>0)
// console.log(undefined<0)
// console.log(undefined>=0)
// console.log(undefined<=0)
//in all the comparision operation with undefined the answer will be false

//strict check- no conversion of data type
console.log("2"===2)
console.log(Number("2")===2)
