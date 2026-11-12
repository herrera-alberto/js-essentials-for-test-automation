"use strict";
/**
* Real time use of callback function using fetch npm package
*
* @scenario
* Get the api response
* @url
* https://api.github.com/users/github
*
* @pointstoRemember
* 1. Look at the documentation and see if they support promise
* 2. Understand the order in which the callback function attaches the processed
value
*
*/

// SHIFT + Option + A (Multiline)

/* go to npmjs.com, search for fetch, first result
https://www.npmjs.com/package/fetch

EXAMPLE Given for real time use:
var fetchUrl = require("fetch").fetchUrl;

source file is iso-8859-15 but it is converted to utf-8 automatically
fetchUrl("http://kreata.ee/iso-8859-15.php", function(error, meta, body){
    console.log(body.toString());
});
 */

// So lets use it:
const fetchUrl = require("fetch").fetchUrl; // Let's not use var, const instead

// Using Function
fetchUrl("https://api.github.com/users/github", function (err, meta, body) {
  console.log(body.toString());
  console.log("==========");
});

// Using Arrow Function
fetchUrl("https://api.github.com/users/github", (err, meta, body) => {
  console.log(body.toString());
});

// In real time, we will call a function through
//Wrap this in a custom function
function getAPIResponse() {
  fetchUrl("https://api.github.com/users/github", (err, meta, body) => {
    console.log(body.toString());
    console.log("==========");
  });
}
getAPIResponse()
