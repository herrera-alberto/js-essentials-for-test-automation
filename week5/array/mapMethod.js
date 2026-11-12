"use strict";
/**
 * Use of map method
 * @usecase
 * Imagine a case where all numbers are represented in an strings
 * - how to convert them all to number
 * @approach
 * 1. loop
 * 2. map (easy)
 *
 * @returns
 * modified array
 */

let givenArr = ["123", "25", "566", "122"];

let toNum = [];
for (let i = 0; i < givenArr.length; i++) {
  let converting = parseInt(givenArr[i]);
  toNum.push(converting);
}
console.log(toNum);

// MAP

let modifiedArray = givenArr.map( ele => parseInt(ele));
console.log("-- using .map(ele => (ele)) --");
console.log(modifiedArray);
