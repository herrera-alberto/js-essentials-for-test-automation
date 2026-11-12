"use strict";
/**
 * Rest parameter and arguments object
 *
 * @definition
 * 1. The rest param is denoted by... <paramName>
 * The rest parameter syntax allows us to represent an indefinite number of arguments as an array
 *
 * 2. arguments object made available within the function body
 * 3. The arguments can be access by array-like notation arguments [il
 * 4. It has a length property
 *
 */

// 1. The rest param is denoted by... <paramName>

function sum(num1, num2, ...numN) {
  let total = 0;
  console.log(arguments); // [Arguments] { '0': 2, '1': 3, '2': 5, '3': 5, '4': 9 }
  console.log(arguments[4]); // 9
  console.log(arguments.length); // 5
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return `The total SUM is ${total}`;
}

let sumValues = sum(2,3,5,5,9);
//console.log(sumValues);
