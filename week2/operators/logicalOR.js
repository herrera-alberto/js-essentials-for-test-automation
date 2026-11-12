/**
*
* Logical operator OR (||)
* 
**/

// Check if given day is weekend or not

let day = "Sunday";

if(day === "Saturday" || day === "Sunday"){
    console.log(`Given day: ${day} is weekend.`);
} else{
    console.log(`Given day: ${day} is NOT weekend.`);
}


// DEFAULT VALUE
console.log("==========");
let targetbrowser = ""

let browser = targetbrowser || "Chrome";

console.log(browser);