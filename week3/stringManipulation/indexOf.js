"use strict";

/*
 * Use of indexOf method
 */

let str = "Application # {12345} submitted";

let start = str.indexOf("{");
console.log(start); // 14

let end = str.lastIndexOf("}");
console.log(end); // 20

let appNum = str.slice(start + 1, end);
console.log(appNum);
