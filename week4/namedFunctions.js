"use strict";

/**
* Named function
* @definition
* Function that has a name/identifier
*
* @scenario
* 1. function that returns a value
* 2. function that does an action
* 3. Calling function
* 4. Any type of data can be provided and no type checking is done
* 5. More or less args can be provided and -
     no check is performed on # number of parameter(s) Vs Number of args received
* 6. Function name and typeof Operator
*     
*/

// 1. function that returns a value
function addTwoNum (num1, num2){
    let sum = num1 + num2;
    return sum;
}

// 2. function that does an action
function click(ele){
    console.log(`Clicking the given ele: ${ele}`);
    //ele.click();
}

// 3. Calling function
let total = addTwoNum(5, 5);
console.log(total);
click("loginButton");


// 4. Any type of data can be provided and no type checking is done
//let total = addTwoNum("five", "five"); // fivefive

// 5. More or less args can be provided and -
//    no check is performed on # number of parameter(s) Vs Number of args received

// let total = addTwoNum() // NaN
// let total = addTwoNum(5) // NaN
// let total = addTwoNum(5, 5, 5) // it will ignore 3rd value, will return 10
//console.log(total);

// 6. Function name and typeof Operator

console.log(addTwoNum); // [Function: addTwoNum]
console.log(typeof addTwoNum); // function
console.log(typeof addTwoNum(2,2)); // number
