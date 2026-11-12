"use strict";

/*
 * Create a page class with re-usable methods
 */

class Page {
  constructor() {}

  //First Method
  navigateTo(url) {
    console.log(`>>> Navigating to following url: ${url}`);
    // TO-DO: Write following steps
  }

  //Second Method
  click(ele) {
    console.log(`>>> Clicking following button: ${ele}`);
  }
}

module.exports = Page;
// This to export PAGE parent class to other classes.