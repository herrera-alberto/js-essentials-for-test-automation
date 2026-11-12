"use strict";

/**
 * Scenario
 * 1. Extract only yy-mm-dd format
 * 2. Extract year (4 digits) - 0 index
 * 3. Ectract month - 5 index
 * 4. Extract date - 8 index
 */

let dt = "2022-02-17";

// Extract only yy-mm-dd format
let yymmdd = dt.slice(2);
console.log(`Only yy-mm-dd format: ${yymmdd}`);

// Extract year (4 digits) - 0 index
let year = dt.slice(0, 4); // <-- ends with 
console.log(`Only 4 digits year: ${year}`);

// Extract month - 5 index
let month = dt.slice(5, 7);
console.log(`Only month values: ${month}`);

// Extract date - 8 index

// let day = dt. slice(8,10) // Option 1
// let day = dt. slice(8) // Option - o
let day = dt.slice(-2); // <-- reverse index, starts with -1, -2, -3 ...
console.log(`Only day values: ${day}`);
