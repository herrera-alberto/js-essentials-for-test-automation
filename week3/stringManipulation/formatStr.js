"use strict";

/*
 * Formatting string using template literalsi
 * Examples:
 * ABC Bank Statement from 2022-01-01 to 2022-02-01
 * for account ending in *12345
 */


// Example 1
let stDt = "2026-01-01";
let endDt = "2026-02-01";
let acNum = 98765;
let emailSub = `ABC Bank Statement from ${stDt} to ${endDt} 
for account ending in *${acNum}.`;
console.log(emailSub);
