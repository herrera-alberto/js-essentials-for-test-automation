let val1 = "5";
let val2 = "5.5";

console.log(`\nThe type of ${val1} is: ${typeof(val1)}`); // string
console.log(`The type of ${val2} is: ${typeof(val2)}`); // string

// Convert strings to numbers
numtoVal1 = parseInt(val1);
numtoVal2 = parseFloat(val2);
console.log("\n-- PARSEINT and PARSEFLOAT --");
console.log(`The type of ${numtoVal1} is: ${typeof(numtoVal1)}`); // number
console.log(`The type of ${numtoVal2} is: ${typeof(numtoVal2)}`); // number

// unary plus operator
numtoVal3 = +val1;
numtoVal4 = +val2;
console.log("\n-- UNARY --");
console.log(`The type of ${numtoVal3} is: ${typeof(numtoVal3)}`);
console.log(`The type of ${numtoVal4} is: ${typeof(numtoVal4)}`);

// Convert numbers to Strings!      
let numtoStr1 = numtoVal3.toString();
let numtoStr2 = numtoVal4.toString();
console.log("\n-- toString(); --");
console.log(`The type of ${numtoStr1} is: ${typeof(numtoStr1)}`);
console.log(`The type of ${numtoStr2} is: ${typeof(numtoStr2)}`);



