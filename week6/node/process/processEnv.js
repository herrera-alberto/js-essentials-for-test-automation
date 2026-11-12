"use strict";

/**
* process.env
*
* @notes
* 1. process is a global module - i.e can access directly
*
* @usecase
* You want to set an environment variable so you can access anywhere in your project
*
* @scenario
* 1. To set a environment variable at runtime (decide which environment to run the test)
* 2. To read env file and get all secret info such as user creds, auth key...etc
*
* @bestpractice
* The env variable in UPPER CASE
*
* @steps
* 1. Access process.env global object
* 2. Set an environment variable via command line
* 3. Access that variable in test code
* 4. Run the code from project root
* 5. Set up environment variable via npm script
* 6. Run the code from project root
* 
*/

// Access process through require (or import)
const process = require("process");

// If we are using ESM:
// import process from 'process';

// 1. Access process.env global object
//console.log(process.env); // All global variables

// 2. Set an environment variable via command line
// In TERMINAL, we write:
// export TARGET=DEV && node processEnv.js

// 3. Access that variable in test code
console.log(process.env.TARGET);

// 4.  Run the code from project root
// We use a dot followed by path until the file is reached.
// js-essentials-for-automation $ node ./week6/node/process/processEnv.js 
// DEV


// 5. Set up environment variable via npm script
// We type the path: node ./week6/node/process/processEnv.js 
// into a key inside package.json.
// We can call it anything, such as "demo":
// "demo": "node ./week6/node/process/processEnv.js"
// Now, we can use npm script to access the file

// npm run demo , then ENTER


// 6. Run the code from project root

// We can add all into package.json file, including the ENV var
// "demo": "export TARGET=TEST && node ./week6/node/process/processEnv.js"

// then just run: npm run demo
