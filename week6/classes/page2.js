"use strict";

// Create a SUPER class with 2 methods

class Page2 {
  //constructor
  constructor() {}

  //method 1
  navigateTo(url) {
    console.log(`Navigating to ${url}`);
  }

  //method 2
  clickElement(ele) {
    console.log(`Clicking element: ${ele}`);
  }
}

module.exports = Page2;
// To export Class
