/**
 * Conditional statements use cases:
 * 1. Just if statement
 **/

// Use case 1: Just if - handling a ramdom popup

// let popupExist = true;
// if (popupExist == true) console.log('>>> Perform click action...');

// Use case 2: Just if (NOT) - Checking for falsy value

// let data = "hola";
// if (!data) throw Error(">>> No valid data provided");
// else {
//   console.log(data);
// }

// Use case 3: if...else 
// If the file exists, read the file. Else, create the file.

// let fileExist = "N";
// if(fileExist === "Y"){
//     console.log(`>>> The file exists!`);
// } else{
//     console.log(`>>> Creating the file...`);
// }

// Use case 4: if else if... Nested conditions. Act based on list of conditions.

// let err = "DataValidation"

// if (err === "Error"){
//     console.log(`>>> Retry...`);
// } else if (err === 'AssertionError'){
//     console.log(`>>> Fail the test...`);
// } else if (err === "DataValidation") {
//     console.log(`>>> Read the test data file...`);
// } else {
//   console.log(`>> Printing the error message...`);
// }


// Use case 5: if else [Inner Conditions]: Quering a Database for tesst data.

// let  isSuccess = false

// if (isSuccess === true) {
//   console.log(`>>> Storing the DB values...`);
// } else {
//   console.log(`No data received!`);
//   let errorCode = "ACCEPT";
//   if (errorCode === "ACCEPT") {
//     console.log(`Continue the execution...`);
//   } else {
//     console.log(`Fail the test..!`);
//   }
// }

// Use case 6: Use of IF conditional in For Loop

for (i = 1; i <= 10; i++) {
  if (i === 6) break;
  console.log(i);
}
console.log(`>>> After the for loop..`);
