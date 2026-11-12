// Use of variables

let greeting = "Hello, World!"; // declaring a variable called greeting and assigning it a string value
console.log("-----------");
console.log(greeting);

/**
* Variables rules:
1. Variable name should start with a letter, or underscore (_), or dollar sign ($)
2. System reserved keywords can't be used e.g. if, else, throw, break
3. Variable names are case-sensitive
4. Can't have same name for other types (e.g. function name, object name)
5. Multiple variables can be declared in single line (separated by comma)
6. When you just declare a variable, the data type will be undefined
*/

/**
 * var, let and const use cases
 */

// let
let value1 = 0;
value1 = 10; // reassigning value to variable value1
console.log(value1); // output: 10

console.log("The value using LET is:",value1);

// changing value to a String
value1 = "Ten";
console.log("The value changing to a String is:",value1);


// const
const APP_URL = "https://www.google.com"; // declaring a constant variable called APP_URL and assigning it a string value
console.log("The value using CONST is:",APP_URL);


