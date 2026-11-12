"use strict";

/*
* Adding elements to array
* @options
* 1. Assignment operator
* 2. Using - push() method
*/

let arr = ["apple", "orange", "banana"]
console.log(arr);

// 1. Assignment operator
console.log("--- Using Assignment Operator ---");
arr[3] = "mango";
console.log(arr);

// 2. Using - push() method
console.log("--- Using .push() Operator ---");

arr.push("kiwi");
console.log(arr);
console.log(`Total elements: ${arr.length}`);