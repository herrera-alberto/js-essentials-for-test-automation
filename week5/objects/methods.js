"use strict";
/**
 * Adding method to object
 * different ways of creating a method
 * 1. Anonymous function with key
 * 2. Arrow function with key
 * 3. method without a key
 *
 */

// Anonymous Function
console.log(" --- USING ANONYMOUS ---");
let reportData = {
  testID: 12345,
  status: "PASS",
  "PASS/FAIL Flag": "PASS",
  totalTest: 100,
  totalPass: 80,
  isInScope: true,
  passrate: function () {
    return (this.totalPass / this.totalTest) * 100;
  },
};

// Call a method from an object
console.log(reportData.passrate());
console.log(`Pass Rate Anonynous is: ${reportData.passrate()}`);

// Arrow Function
console.log(" --- USING ARROW FUNCTION ---");

let reportData1 = {
  testID: 12345,
  status: "PASS",
  "PASS/FAIL Flag": "PASS",
  totalTest: 100,
  totalPass: 80,
  isInScope: true,
  passrate: () => (reportData1.totalPass / reportData1.totalTest) * 100,
  // We need to call the Variable ReportData1.totalPass to make it work");
};

console.log(`Pass Rate Arrow Fn is: ${reportData1.passrate()}`);

// Method without a Key
console.log(" --- USING METHOD WITHOUT KEY ---");

let reportData2 = {
  testID: 9843,
  status: "PASS",
  "PASS/FAIL Flag": "PASS",
  totalTest: 100,
  totalPass: 70,
  isInScope: true,
  passrate() {
    return (reportData1.totalPass / reportData1.totalTest) * 100;
  },
};

