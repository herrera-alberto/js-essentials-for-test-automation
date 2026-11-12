/**
 * Standard for loop
 * Remember these points(!):
 * 1. Define the starting point
 * 2. Define end/exit condition
 * 3. Decide increment/decrement
 */

// for (let i = 10; i >= 1; i--) {
// console.log(i);
// }

// Advanced use case with an Array
// imagine a case, array with content, get only the numer typer,
// and get the sum of values.

// let arr = ["Apple", 10, "Orange", 20, "Grapes", 30];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   let arrElement = arr[i];
//   if (typeof arrElement === "number") {
//     sum = sum + arrElement;
//   }
//   console.log(arr[i]);
// }

// let arr = ["Apple", 10, "Orange", 20, "Bananas", 30];
// let sum = 0;

// for (let i = 0; i < arr.length; i++){
//     let arrElement = arr[i];
//     if(typeof arrElement === "number"){
//         sum += arrElement;
//     }
// }
// console.log(`The sum in this array is ${sum}`);

// let arr = ["Apple", 10, "Orange", 20, "Bananas", 30];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   let arrElement = arr[i];
//   if (typeof arrElement != "number") continue;
//   sum += arrElement;
// }
// console.log(`The sum in this array is ${sum}`);

// Validate an array and check if it has numbers, if so, sum them.

let array1 = ["London", 30, "Rome", 20, "Paris", 5];
let sum1 = 0;

for (let i = 0; i < array1.length; i++) {
  let arrayElement = array1[i];
  if (typeof arrayElement === "number") {
    sum1 += arrayElement;
  }
}
console.log(`The sum in this array is ${sum1}.`);

// Advanced use case with an Array
// imagine a case, array with content, get only the number type,
// and get the sum of values.
let array1 = ["Apple", 5, "Orange", 6, "Grapes", 9];
total = 0;
for (i = 0; i <= array1.length; i++) {
  if (typeof array1[i] === "number") {
    let sum = array1[i];
    total += sum;
  }
}

console.log(total);