"use strict";

// import from page2
const Page2 = require("./page2"); // To import class Page2

// Create a Sub class
class loginPage2 extends Page2 {
  //EXTENDS FROM PARENT CLASS
  //Constructor
  constructor() {
    super(); // TO FETCH ALL METHODS FROM PARENT CLASS
  }

  //Own Method
  clickLoginBtn() {
    this.clickElement("Login Button");
  }
}

// OBJECT CREATION:

let loginPg2 = new loginPage2();
loginPg2.clickLoginBtn();

loginPg2.clickElement("Enter");

loginPg2.navigateTo("www.google.com")




