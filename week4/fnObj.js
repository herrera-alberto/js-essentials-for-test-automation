"use strict";


// Sample
function addTwoNum (num1, num2){
    let sum = num1+num1
    return sum
}

console.log(addTwoNum.length);
console.log(addTwoNum.toString());
console.log(addTwoNum);


// 1. Defining a standard function
function sayHello() {
  return "Hello!";
}

// 2. Assigning a property directly to the function (just like an object)
sayHello.language = "English";

// 3. Storing the function inside an array
const functionArray = [sayHello];

// 4. Passing the function as an argument to another function (Higher-Order Function)
function executeFunction(fn) {
  return fn(); // Invoking the function passed in
}

console.log(sayHello.language); // Output: "English"
console.log("----");
console.log(executeFunction(sayHello)); // Output: "Hello!"
console.log("----");
console.log(sayHello); // function and properties
console.log("----");
console.log(sayHello.toString()); // the function itself
