"use strict";

/* 
CommonJS module system
* @recap
* 1. Module is a file that contain js code
* CommonS is default module system
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

module.exports = {
  greet,
  obj,
  str,
};

//console.log(module);
