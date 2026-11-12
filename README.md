# JavaScript & Node.js Essentials for Test Automation

My exercises from the Udemy course **[JavaScript and Node.js Essentials for Test Automation](https://www.udemy.com/course/javascript-and-nodejs-essentials-for-test-automation/)** (completed November 2026).

I'm a QA Lead with 9+ years in software testing. I took this course to build the JavaScript foundation for modern test automation frameworks like Playwright. Every file is a hands-on exercise, with notes in the comments explaining the concept and when it's useful in test code.

## What's inside

| Folder | Topics |
|---|---|
| [`week1`](week1) | Variables, data types, literals, type conversion, falsy values, comments |
| [`week2`](week2) | Operators (arithmetic, comparison, logical, ternary, assignment), conditionals, switch |
| [`week3`](week3) | String manipulation (split, slice, replace, indexOf, formatting, comparison), loops (`for`, `while`, `forEach`, `for...in`, `for...of`) |
| [`week4`](week4) | Functions (named, anonymous, arrow, parameters, rest, return), callbacks, Promises, `async`/`await` |
| [`week5`](week5) | Arrays (`map`, `filter`, merge, access) and objects (properties, methods, iteration, merging, inheritance) |
| [`week6`](week6) | Classes and inheritance with a Page Object Model example (`page.js` → `loginPage.js`), Node.js file system, CommonJS vs ES modules, reading JSON, `process.env` and `process.cwd()`, a first Playwright test |
| [`data`](data) | Sample JSON used by the file-system exercises |

## Highlights for test automation

- **Page Object Model:** a base `Page` class extended by a `LoginPage`, the pattern used in Playwright and Selenium frameworks (`week6/classes`)
- **Async code:** Promises and `async`/`await`, the basis of every Playwright step (`week4`)
- **Environment config:** choosing the target environment at runtime with `process.env` and npm scripts (`week6/node/process`)
- **Test data:** reading and writing JSON and files with Node's `fs` module (`week6/node`)

## Running the exercises

Requires Node.js 18+.

```bash
npm install
node week4/promise/promiseDemo.js
npm run demo
```
