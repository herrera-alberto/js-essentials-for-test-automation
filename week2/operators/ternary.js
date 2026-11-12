/**
* Ternary operator (?)
* @syntax:
* <expression› ? "val1" : "val2"
**/

// Use case: Set log level for different run environment
// Basic use
let runner = "cloud"
// let loglevel = runner === "local" ? "Info" : "Error"
// console. log(loglevel);

// Advanced use
let loglevel = runner === "local" ? "Info" : runner === "cloud" ? "Silent" : "Error"
console. log (loglevel);

console.log(`5 + "3"`);


