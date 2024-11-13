const fs = require("fs"); //file system

const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);

const textOut = `this is what we know about the avocado ${textIn}. \nCreated on ${Date.now().toLocaleString()}`;
fs.writeFileSync("./txt/output.txt", textOut);
console.log(`File has been written out`);

// Blocking and Non-Blocking: Asynchronous
// Synchronous code is also called blocking code
// Asynchronous code is also called non-blocking code
