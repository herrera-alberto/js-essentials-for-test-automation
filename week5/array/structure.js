"use strict";
/**
 * Different data structure
 *
 * @scenario
 * 1. Same type of data
 * 2. Different type of data
 * 3. Array containing an object
 * 4. Array containing an array
 */

// 1. Same type of data
let arr = ["apple", "orange", "banana"];
console.log(arr);
console.log(`Total elements: ${arr.length}`);

// 2. Different type of data
let arr2 = [1, "two", true];
console.log(arr2);
console.log(`Total elements: ${arr2.length}`);
// 3. Array containing an object
let arr3 = [
  { name: "Rob", age: 25 },
  { name: "Bob", age: 30 },
];

console.log(arr3);
console.log(`Total elements: ${arr3.length}`);

// 4. Array containing an array
let arr4 = [
  [11, 2, 31],
  ["one", "two", "three"],
];

console.log(arr);
console.log(`Total elements: ${arr4.length}`);
