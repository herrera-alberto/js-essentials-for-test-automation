"use strict";

/*
 * Importing
 * 1. Own code
 * 2. NPM package
 */

// COmmon JS
// const data = require("./helper"); // default
// const { obj } = require("./helper"); // named

import data from "./helper.js";

console.log(typeof data); // object
console.log(data); //{ greet: [Function: greet], obj: { a: 1, b: 2, c: 3 }, str: 'Hello' }
console.log(data.greet()); // Hello from function...

console.log("-----");
console.log(data.obj);
console.log(data.str);
