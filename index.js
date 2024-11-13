const fs = require("fs"); //file system

const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);
