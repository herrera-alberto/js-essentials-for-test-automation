"use strict";

// create an object
console.log("--- Object ---");

let obj = {
  name: "Alberto",
  age: 38,
  isMarried: false,
};

console.log(obj);
console.log(obj.age);
console.log(typeof obj);
console.log(typeof obj.isMarried);

//constructor function
console.log("--- Constructor Function ---");

function Person(name, age, isMarried) {
  this.name = name, 
  this.age = age, 
  this.isMarried = isMarried
  return `This persons name is: ${this.name}, age is ${this.age}, and marital status is ${this.isMarried}`;
}

let obj1 = new Person("Jose Abel", 32, true)
console.log(obj1);

// Object Create Method
console.log("--- Object Create Method ---");

let obj2 = Object.create(obj1);

console.log(obj2); // Will print empty {}
console.log(Object.getPrototypeOf(obj2));
console.log(obj2.name);