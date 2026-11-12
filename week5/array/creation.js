"use strict";

/**
 * Array creation - different options
 *
 * @options
 * 1. Literals (most commonly used)
 * 2. Constructor function
 * 3. Object creation using new keyword
 *
 */

// 1. Literals (most commonly used)
let arr = ["apple", "orange", "banana"];

// Constructor function
let arr1 = Array("apple", "orange", "banana");

// Object creation using new keyword
let arr2 = new Array("apple", "orange", "banana");

// SAME VALUES WILL BE FETCHED for each option
console.log(arr);
console.log(`Single element: ${arr[1]}`);
console.log(typeof arr);
console.log(arr.constructor);
