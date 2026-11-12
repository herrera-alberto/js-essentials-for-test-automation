"use strict";

/**
 * Iterate objects properties
 * @methods
 * 1. keys ()
 *
 */

let testRunner = "local";
let machineID = "";
let envFile = "test_config";

let reportData = {
  testID: 12345,
  status: "PASS",
  "PASS/FAIL Flag": "PASS",
  totalTest: 100,
  totalPass: 80,
  isInScope: true,
  passrate() {
    return (this.totalPass / this.totalTest) * 100;
  },
  runDt: new Date(),
  runner: testRunner,
  macID: machineID ? machineID : "Unknown",
  [envFile]: {
    env: "test",
    url: "http://test.com",
  },
  scope: ["smoke", "reg", "e2e"],
  previousRun: {
    status: "FAIL",
    runID: 6789,
  },
};

console.log(reportData);
console.log("-----------");
// Using for...in loop

for (let keys in reportData) {
  console.log(`The key is: ${keys}, and value is: ${reportData[keys]}`);
}

// Using JSON.stringify method
console.log("-----USING JSON.stringify method------");

for (let keys in reportData) {
  console.log(`The key is: ${keys}, and value is: ${JSON.stringify(reportData[keys])}`);
}

