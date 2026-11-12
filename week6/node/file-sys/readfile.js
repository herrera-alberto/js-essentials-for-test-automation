"use strict";

/**
 * File operations - Read file
 * @method
 * fs.readFileSync()
 *
 */

// Bring fs functions
let fs = require("fs");

// Create path where to read the file
let filepath = `${process.cwd()}/data/sampleData.json`;

// Read the file and assing to variable to see in console
//let data = fs.readFileSync(filepath);

// provide format
let data = fs.readFileSync(filepath, "utf-8");

console.log(data);
