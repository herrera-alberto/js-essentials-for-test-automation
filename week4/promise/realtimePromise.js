"use strict";

// we are using common js
// lets install common JS for now
// npm install node-fetch@2

// mod.cjs
// const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const fetch = require("node-fetch");

function getAPIRes() {
  fetch("https://api.github.com/users/github")
    .then((res) => {
      return res.json(); // This is how apromise is handled, passed to another
    })
    .then((updatedRes) => {
      // according to node-fetch tool, this is how it works
      console.log(updatedRes);
    })
    .catch((err) => {
      console.log(err);
    });
}
//getAPIRes();

