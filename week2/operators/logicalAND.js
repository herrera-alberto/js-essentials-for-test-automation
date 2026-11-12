/**
 * Logical Operator
 * 1. &&
 * 2. ||
 * 3. !
 *
 * Two main purposes:
 * 1. In conditional statements (e.g if... else)
 * 2. To have a default value
 */

// Use case 1: AND (&&) check if given val is a text
let val = "Monday";
if (typeof val === "string" && val.length > 1) {
  console.log(`Given value : ${val} is valid string`);
} else {
  console.log(`Given value : ${val} is NOT valid string`);
}

let value = 10;
if (typeof value === "string" && value.length > 2) {
  console.log(`Given value : ${value} is valid string`);
} else {
  console.log(`Given value : ${value} is NOT valid string`);
}

console.log("==================");

let = val1 = 0;

for (let i = 1; i <= 10; i++) {
  val1 = val1 + i;
  console.log(`Now the number is ${val1}`);
}
