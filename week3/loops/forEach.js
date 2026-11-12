/* Use of forEach method
 * 1. It cam be used to access the array's element
 *
 */

let windows = ["Google", "Amazon", "YouTube"];

// forEach( () => {} );

windows.forEach((value, index, array) => {
  console.log("Value is: " + value);
  console.log("Index is: " + index);
  console.log("Array is: " + array);
});

console.log(windows);
console.log(typeof windows);

// For in
console.log("------- FOR IN --------");
let obj = { a: 10, b: 20, c: 30 };
console.log(obj);
for (let key in obj) {
  console.log(key, obj[key]);
}

console.log("------- STRING --------");

let str = String("Hello World");
console.log(str);
console.log(typeof str);
