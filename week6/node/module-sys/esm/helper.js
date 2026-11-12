"use strict";

/*
 * ECMAScript module system
 * @rule
 * 1. Only single default export is allowed
 *
 * @scenario
 * Export a function, object and a variable
 */

// Function
function greet() {
  return "Hello from function...";
}

// An object
let obj = {
  a: 1,
  b: 2,
  c: 3,
};

// Variable
let str = "Hello";

// module.exports = {
//   greet,
//   obj,
//   str,
// };

export default {
  greet,
  obj,
  str,
};

//console.log(module);
