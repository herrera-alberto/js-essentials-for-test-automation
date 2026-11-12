"use strict";

/*
 * Using the callback function
 */

// callback function
function printMsg(msg) {
  console.log(`This is the callback function`);
  console.log(msg);
  console.log("----");
}

// main function
function greet(name, greeter) {
  console.log(`This is the main function...`);
  let greeting = `Hello, ${name}!`;
  greeter(greeting);
}

// Option 1: Calling a written function (printMsg)
greet("Alberto", printMsg);

/* Option 2: Writing callback function inside argument
Sometimes function doesnt exist to call it, we nee to create it.
Using function expression */

greet("Abel", function (val) {
  console.log(`The received val from main function is: ${val}`);
  console.log("----");
});

//Option 3: Using arrow function
greet("Jose", (val2) => {
  console.log(`The received val from main function is: ${val2}`);
});
