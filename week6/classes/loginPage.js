"use strict";

/**
 * A login page
 *
 * @lessons
 * 1. How to inherit properties from base class?
 * 2. How to call base class property or method?
 * 3. How to create an object?
 *
 * @terminology
 * super class →> sub-class j
 * base class →> derived class
 * parent class →> child class
 *
 */

// Export PAGE class to here
const Page = require("./page");

class loginPage extends Page {
  //Adding constructor
  constructor() {
    super(); // TO FETCH ALL METHODS FROM PARENT CLASS
  }

  // Getter
  get loginBtn() {
    return "login Button";
  }

  // Adding own Method
  clickLoginBtn() {
    this.click(this.loginBtn);
  }
}

// Object Creation
let loginPg = new loginPage();
console.log(loginPg); // loginPage {}
console.log(typeof loginPg);

//Calling Parent Class method
loginPg.navigateTo("www.google.com");
loginPg.click("Enter");

// Calling own method
loginPg.clickLoginBtn();
