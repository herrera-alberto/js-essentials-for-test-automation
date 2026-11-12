"use strict";

/**
 * Inheritance
 *
 * @rule
 ** Every object in JS will at least inherit from one (parent) object (which can be the Object)
 */
let obj = {};
console.log(obj.constructor); //[Function: Object]
console.log(obj.toString()); //[object Object]

let arr = [];
let re = /abc/
let val = 123

// console.log(typeof obj); //this will give us 'object'
// console.log(typeof arr);
// console.log(typeof re);
// console.log(typeof val);

// Use of constructor
console.log(obj.constructor); // [Function: Object]
console.log(arr.constructor); // [Function: Array]
console.log(re.constructor); // [Function: RegExp]
console.log(val.constructor); // [Function: Number]
