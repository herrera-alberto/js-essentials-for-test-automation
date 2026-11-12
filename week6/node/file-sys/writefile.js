"use strict";

/**
 * File operations - Write file
 *
 * @method
 * fs.writeFileSync()
 *
 */

let err = {
  testid: "TC123",
  errDes: "App failed to launch",
};

// Import fs function
let fs = require("fs");

// Create the path were to write
let filepath = `${process.cwd()}/data/err.json`;

// Converto to string
//let data = JSON.stringify(err)

// Give proper reading json format.
let data = JSON.stringify(err, undefined, 4);

// Use the function to pass and write the json file.
fs.writeFileSync(filepath, data);
