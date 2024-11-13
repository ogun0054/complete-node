const fs = require("fs"); //file system

// Blocking, synchronous way
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);

// const textOut = `this is what we know about the avocado ${textIn}. \nCreated on ${Date.now().toLocaleString()}`;
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log(`File has been written out`);

// Blocking and Non-Blocking: Asynchronous
// Synchronous code is also called blocking code
// Asynchronous code is also called non-blocking code

// Non-blocking, Asynchronous way
fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  err
    ? console.log("Error!")
    : fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
        console.log(data2);
        fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
          console.log(data3);

          fs.writeFile(
            "./txt/final.txt",
            `${data2}\n${data3}`,
            "utf-8",
            (err) => {
              console.log("file has been written");
            }
          );
        });
      });
});
