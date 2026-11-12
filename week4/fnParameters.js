"use strict";
/*
 * Function parameter
 *
 * @scenario
 * 1. Default param
 * 2. Passing undefined/any falsy values if not known
 * 3. Passing primitives, object types as arg
 */

// 1. Default param
// Greetings

function greeting(name, greeting = "Hi") {
  console.log(`${greeting}, ${name}!`);
}

greeting("Alberto"); // It will use the default parameter "Hi"
greeting("Alberto", "Hello"); // It will use "Hello" as greeting.

// * 2. Passing undefined/any falsy values if not known

function printFullname(name, middle, last) {
  //console.log(`The fullname is: ${name} ${middle} ${last}`); <-- What if middle name not given?
  if (middle) {
    console.log(`The fullname is: ${name} ${middle} ${last}`);
  } else {
    console.log(`The fullname is: ${name} ${last}`);
  }
}

printFullname("Jose", "Abel", "Quezada");
printFullname("Alberto", "", "Herrera");

// 3. Passing primitives as object types as arg

function fullName(personObj) {
  if (personObj.middle) {
    console.log(
      `The fullname is: ${personObj.name} ${personObj.middle} ${personObj.last}`,
    );
  } else {
    console.log(`The fullname is: ${personObj.name} ${personObj.last}`);
  }
}

fullName({
  name: "Jose",
  middle: "Abel",
  last: "Quezada",
});

fullName({
  name: "Alberto",
  middle: "",
  last: "Herrera",
});
