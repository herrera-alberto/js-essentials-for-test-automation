"use strict";
/**
 * Arrow functions
 *
 * @scenario
 * 1. Convert a normal function to arrow funtion
 * 2. No param
 * 3. Single param
 * 4. More than one param(single and more than one statements)
 * 5. forEach() method example
 */

// 1. Convert a normal function to arrow funtion
//older version
function addTwoNum(num1, num2) {
  let sum = num1 + num2;
  return sum;
}
let older = addTwoNum(2, 3);
console.log(`The Normal Function: ${older}`); // The Normal Function: 5

// with ARROW Function () => {}
let sum = (num1, num2) => {
  let sum = num1 + num2;
  return sum;
};

let total = sum(2, 2);
console.log(`The Arrow Function: ${total}`); // The Arrow Function: 4

// 2. No param
let noParam = () => 5 > 10;
let result = noParam();
console.log(result); // false

// 3. Single param
let greeting = name => { // Dont need (name) parenthesis
  console.log(`Greetings, ${name}!`);
};
let salute = greeting("Alberto");

// 4. Single Statements
let greeting1 = name => console.log(`Greetings, ${name}!`); // Dont need {} if single statement
let salute1 = greeting1("Jose Abel");

// Another example
let sum2 = (num1, num2) => num1 + num2;
let sumSingle = sum2(4,7)
 console.log(sumSingle);


// 5. forEach() method example
