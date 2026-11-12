"use strict";
/**
 * Objects creation - Different ways
 *
 * @scenario
 * 1. Using object literals/initializer (Commonly used in Test Automation)
 * 2. Using constructor fn
 * 3. Object create method
 * From ES5, Object can be created using classess
 */

// 1. Using object literals/initializer (Commonly used in Test Automation)

console.log(" -- Using Literals --")
let obj = {
  name: "Alberto",
  age: 38,
  isMarried: false,
};

console.log(obj); // { name: 'Alberto', age: 38, isMarried: false } (overall object)
console.log(obj.name); // Alberto (single property)
console.log(typeof obj); // object (type of object)
console.log(typeof obj.age); // number (type of single property)

// 2 USING CONSTRUCTOR FN
console.log(" -- Using Constructor Function --")

// Real life, we use this when creating a class, and then 
// have a constructor whithin the class
// Este es un creador de objetos. Cuando le pasas un nuevo usuario
// Este va a recibir los valores que le estas pasando para este objeto
function Person(name, age, isMarried){
    this.name = name;
    this.age = age;
    this.isMarried = isMarried
    //return `This persons name is ${this.name}, age is ${this.age} and marital status is ${this.isMarried}`
}

let constObj = new Person("Bob", 25, true)
console.log(constObj);
console.log(constObj.age);
// let obj2 = obj1