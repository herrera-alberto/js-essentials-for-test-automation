"use strict";

/*
 * Importing
 * 1. Own code
 * 2. NPM package
 */

const data = require("./helper"); // default
const { obj } = require("./helper"); // named 

console.log(typeof data); // object
console.log(data); //{ greet: [Function: greet], obj: { a: 1, b: 2, c: 3 }, str: 'Hello' }
console.log(data.greet()); // Hello from function...

console.log("-----");
console.log(data.obj);
console.log(data.str);



