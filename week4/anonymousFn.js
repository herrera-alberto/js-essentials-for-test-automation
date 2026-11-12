"use strict";
/**
* Anonymous function (function expression)
* @scenario
* 1. function (without name is assigned to a variable)
* 2. function with name is assigned to a variable
*
* @usage
* In callback context (a funtion requires another function at its argument)
*
*/

// 1. function (without name is assigned to a variable)
let addTwoNum = function (num1, num2) { //No name after function
  let sum = num1 + num2;
  return sum;
};

console.log(typeof addTwoNum); // function
let val = addTwoNum(2, 2);
console. log (val); // 4

// 2. function with name is assigned to a variable 
let sumFn = function addTwoNum(num1, num2) { // name after function
  let sum = num1 + num2;
  return sum;
};

// addTwoNum(2,2)
let val2 = sumFn(3,3)
console.log(val2);

let hi = "hello".toUpperCase();
console.log(hi);