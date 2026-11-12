"use strict";

/**
 * length property rules
 *
 * @rules
 * 1. length property returns total index + 1. This does not mean there are that many elements in that object
 * 2. length property can be set manually
 */

// Rule 1
console.log("-- .length property not always brings total elements --");

let arr = [];
arr[4] = "kiwi";
console.log(arr);
console.log(`Total elements: ${arr.length}`);

// How to know actual elements: Using for loop

let count = 0;
for (let i = 0; i <= arr.length; i++) {
  if (arr[i]) {
    count++;
  }
}
console.log(`The real count of elements is: ${count}`);

// Rule 2: Length property can be set manually
console.log("-- Setting .length property manually --");
let array = [];
array.length = 10;
console.log(array); // [ <10 empty items> ]

console.log(`The total elements are: ${array.length}`);
