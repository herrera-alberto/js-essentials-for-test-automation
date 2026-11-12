/*
* 1. string
* 2. number
* 3. boolean
* 4. Object
* 5. Array
* 6. Regexp
* 7. undefined and null
*/

// string
let str = "Hola" // with double quotes
let str1 = 'Hello' // with single quotes
let str2 = `${str}, World!` // with template literals and backticks
console.log(str2);
console.log("----------------");

// number
let num = 5
let num2 = 5.5

// boolean
let bool = true

// Object
let obj = {}

// Array
let arr = []

// Regexp
let re = /abc/

// undefined, null
let val1
let tempobj = null

console.log(`The type of str is: ${typeof str}`);
console.log(`The type of number is: ${typeof num}`);
console.log(`The type of boolean is: ${typeof bool}`);
console.log(`The type of obj is: ${typeof obj}`);
console.log(`The type of array is: ${typeof arr}`);
console.log(`The type of reg Exp is: ${typeof re}`);
console.log(`The type of undefined is: ${typeof val1}`);
console.log(`The type of Null is: ${typeof tempobj}`);

console.log("----------------");

