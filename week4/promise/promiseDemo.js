"use strict";
/*
 * @scenario
 * 1. Initialise a promise object
 * 2. Pending, fulfilled and rejected status
 * 3. How to get a resolved and rejected value? - then() ...catch()
 * 4. UnhandledPromiseRejection error
 * 5. Promise chaining
 */

// Initialize a promise object

let promiseObj = new Promise((resolve, reject) => {
  console.log("Executing the promise...");
  if (1 > 2) {
    setTimeout(() => {
      resolve("Promise executed correct!..."); // Async action
    }, 2000);
  } else reject("Promise was not fulfilled..");
});

//Consuming promise (< Using .then() and .catch() >)
//console.log(promiseObj);
// promiseObj
//   .then((res) => {
//     console.log(res);
//     return `${res} Updated with more value `; // To Chain, we use the return to send it to another THEN
//   })
//   .then((updatedVal) => {
//     //chain with .then(()=>{})
//     console.log(updatedVal); // return from previous then was received in updatedVal
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// USING ASYNC AWAIT
async function getData() {
  try {
    let res = await promiseObj;
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
getData(); // Calling getData() function to run it
