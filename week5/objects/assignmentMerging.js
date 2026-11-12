"use strict";
/**
 * Setting up values through Assignment operator
 * 1. Top level property
 * 2. Inner property
 * 3. Assignment to other obj
 */

let reportData = {
  status: "PASS",
  scope: ["smoke", "reg", "e2e"],
  previousRun: {
    status: "FAIL",
    runID: 6789,
  },
};


// Assignment 1) Top Level Property
reportData.status = "FAIL"

// 2.Inner property
reportData.scope[1] = "sanity"
console.log(reportData);

// 3. Assignment to other object:
let obj = {}
obj = reportData

console.log(" ===> This is the obj:");
console.log(obj);