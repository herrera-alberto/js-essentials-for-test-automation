"use strict";
/**
 * Array Intro
 *
 * @scenario
 * 1. Array are mutable
 * 2. Array are internally an Object
 */

// 1. Array are mutable
let str = "Hello";
let arr = [1, 2, 3];
console.log(str.toUpperCase()); // HELLO 
console. log(str); // Hello - Not mutable

console.log(arr); // Print current array
arr.push(0, /abc/, "Apple"); // method .push() to add any type of data end of index
console.log(arr);

// 2. Array are internally an Object
console.log(arr[2]); // 3
console.log(arr["2"]); // 3
