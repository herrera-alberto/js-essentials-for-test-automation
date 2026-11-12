/**
* Falsy values:
* 1. false
* 2. undefined
* 3. null
* 4. 0
* 5. NaN
* 6. ''' (empty string)
*/


//let val = true; // change this value to test different falsy values
//let val = false;
//let val = undefined;
//let val = null;
//let val = 0;
let val = NaN;
//let val = ""; 


if (val) {
  console.log("The condition is met...");
} else {
  console.log(`Given ${val} is a falsy value`);
}
