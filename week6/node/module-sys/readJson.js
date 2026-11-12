"use strict";
/*
 * Use case:
 * Read a json file (e.g some config or constants data)
 * // READING data/sampleData.json, very above, folder below js-essentials-for-automation folder
 */

const data = require("./.././../../data/sampleData.json")

console.log(JSON.stringify(data));
