/*
 * Switch case
 */

let browser = "chrome";
switch (browser) {
  case "chrome":
    console.log(`>> Running chrome browser...`);
    break;
  case "firfox":
    console.log(`>> Running firefox browser...`);
    break;
  case "edge":
    console.log(`>> Running edge browser...`);
    break;
  default:
    console.log(`No valid browser: ${browser} is provided`);
}

let browser1 = "kaka";

switch (browser1) {
  case "chrome":
    console.log("chrome is running");
  case "firefox":
    console.log("firefox is running");
  case "safari":
    console.log("safari is running");
  default:
    if (browser1) {
      console.log(`Not a typical browser used. Using ${browser1}`);
    } else console.log("Not a browser selected");
}
