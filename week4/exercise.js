"use strict";

// * 1. Default param
// Create a fuction with defaul param
function greetings(name, greeting = "How are you today") {
  console.log(`${greeting}, ${name}?`);
}

greetings("Alberto");
greetings("Jose Abel", "What\'s up");

// * 2. Passing undefined/any falsy values if not known
// Create a function to pass first, middle and last name

function fullName(first, middle, last) {
  if (middle) {
    console.log(`The name is: ${first} ${middle} ${last}`);
  } else {
    console.log(`The name is: ${first} ${last}`);
  }
}

fullName("Alberto", "", "Herrera");
fullName("Jose", "Abel", "Quezada");

// 3. Passing primitives as object types as arg
// Create a function to pass objects

function ObjName(personObj) {
  console.log(
    `The name passed as object is: ${personObj.name} ${personObj.last}`,
  );
}

ObjName({
  name: "Mickey",
  last: "Mouse",
});

// Sum N numbers into a function
// Using ...param
console.log("------Sum-----");
function sum(num1, num2, ...numN) {
  //console.log(arguments);
  //console.log(`Argument in position [0}: ${arguments[0]}`);
  //console.log(`Argument in lenght is: ${arguments.length}`);

  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

let val = sum(1, 3, 1, 5, 2, 2, 1, 5);
console.log(`The total sum is: ${val}`);