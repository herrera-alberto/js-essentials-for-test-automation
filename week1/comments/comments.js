#! comments!


// my first program in JS
console.log("hello, world of comments!");

/**
 * adds two numbers together
 * @param {*} num1 
 * @param {*} num2
 * @returns the sum of 2 numbers
 */
function sum(num1, num2) {
  return num1 + num2; // this function returns the sum of two numbers. The type is a number 
}

console.log(sum(5, 10)); // calling the sum function with 5 and 10