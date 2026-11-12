"use strict";
/**
 * Return statement
 *
 * @scenario
 * 1. Return a single primitive value
 * 2. Returns an expression [that evaluates to a value]
 * 3. Return an object type
 * 4. Return a function itself
 * 5. Return statement in conditional statement
 */

// 1. Return a single primitive value

function addTwoNum(num1, num2) {
  let sum = num1 + num2;
  return sum; // Primitive value
}

let primitive = addTwoNum(2, 2);
//console.log("Primitive: " + primitive);

//  * 2. Returns an expression [that evaluates to a value]

function expValue(num1, num2) {
  return num1 + num2; // Expression value
}

let expression = expValue(3, 2);
//console.log("Expression Value: " + expression);

// * 3. Return an object type

function ObjValue(num1, num2) {
  return { totalSum: num1 + num2 }; // Object value
}

let total = ObjValue(4, 5);
//console.log(total);
//console.log(`Return whole object: ${JSON.stringify(total)}`); // How to return whole object
//console.log(`Returning only value: ${total.totalSum}`);

//  * 4. Return a function itself

function fnValue(num1, num2) {
  return function () {
    return num1 + num2;
  };
}

let functionVal = fnValue(3, 10);
//console.log(functionVal); // will return [Function (anonymous)]
//console.log(functionVal()); // call it as functionVal()
// With parenthesis at the end

//* 5. Return statement in conditional statement
// We can use return in conditional statements

function returnValue(num1, num2) {
  if (!num1) {
    return; // the use of return statement in conditionals
  }
  if (!num2) {
    return; // the use of return statement in conditionals
  } 
else {
    let sum = num1 + num2;
    return sum;
  }
}

let rtnVal = returnValue(4, undefined);
//console.log(rtnVal);


let noParam = ()=> 10>5
console.log(noParam);
console.log(typeof noParam);
console.log(noParam.toString());
console.log(noParam());
let result = noParam()

console.log(typeof result);