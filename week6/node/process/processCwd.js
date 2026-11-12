"use strict";

/* 
* process.cwd()
* usecase
* 1. Get the current working dir
* 
* @scenario
* 1. Return value of cwd()
* 2. Different betweent _dirname
* 3. Get a path of file in project dir
*
* @rule
Whereever you issue the node command, that becomes the cwd()
*
*/

// 1. Return Value of current work directory
console.log("-- process.cwd() --");
console.log(process.cwd()); // where the node command is passed
// /Users/albertoherrerasanchez/Documents/workspace/js-essentials-for-automation/week6/node/process

console.log(" ");

// 2. Difference between cwd() and __dirname
console.log("-- __dirname --");
console.log(__dirname); // The file where it is currently sitting.
// /Users/albertoherrerasanchez/Documents/workspace/js-essentials-for-automation/week6/node/process

// If we call these two console logs from root directory, it brings different path.

// process.cwd()
// /Users/albertoherrerasanchez/Documents/workspace/js-essentials-for-automation
// __dirname
// /Users/albertoherrerasanchez/Documents/workspace/js-essentials-for-automation/week6/node/process

console.log(" ");
// 3. Get a path of file in project dir:
console.log("-- Get a path --");
let pathFile = `${process.cwd()}/data/sampleData.json`;

console.log(pathFile);

