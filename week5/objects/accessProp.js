"use strict";

/*
 * @scenario
 * 1. Dot opertor
 * 2. key as string
 * 3. In-built methods: keys() and vals
 * 4. Access child members (inner obj and array)
 *
 */

// Sample

let testRunner = "local";
let machineID = "asdf3255";
let envFile = "test_config";

let reportData = {
  //   testID: 12345,
  //   status: "PASS",
  //   "PASS/FAIL Flag": "PASS",
  //   totalTest: 100,
  //   totalPass: 80,
  //   isInScope: true,
  //   passrate() {
  //     return (this.totalPass / this.totalTest) * 100;
  //   },
  //   runDt: new Date(),
  //   runner: testRunner,
  //   macID: machineID ? machineID : "Unknown",
  //   [envFile]: {
  //     env: "test",
  //     url: "https://test.com",
  //   },
  scope: ["smoke", "regression", "ee2ee"],
  previousRun: {
    status: "FAIL",
    runID: 6789,
  },
};

// get the keys using Object.keys() method
let keys = Object.keys(reportData);
console.log(keys);

// get the values using Object.values() method
let values = Object.values(reportData);
console.log(values);

// To get inner values from array
console.log(reportData.scope[1]); // regression
console.log(reportData.previousRun.status); // FAIL
console.log(reportData["previousRun"]["runID"]); // 6789
