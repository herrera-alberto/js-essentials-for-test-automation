"use strict";

/* Folder operations
*
* * @rule
* fs modules expects a full path (not relative)
* @methods
* 1. existsSync
* 2. mkdirSync
* 3. rmdirSync
* 4. readdirSync
* @scenario
* l. Check if dir exist
* 2. If exist, delete (old results). If not exist, create (screenshot)
* 3. Get files and sub folder of a dir
*/

// Module
//import fs from "fs";

// CommonJS
const fs = require("fs");
// const { cwd } = require("process"); // Why needed?

// 1. Create variable to validate file exists
let folderExist = fs.existsSync(`${process.cwd()}/data/data2/filetoDelete.js`)
console.log(folderExist); 


// 2. Validate si un archivo existe, si no, crearlo
console.log("--- If true delete... ---");
if(folderExist){
    
    folderDelete 
}


// 3. Validate a folder exist, then remove it


// 4. Read a file.