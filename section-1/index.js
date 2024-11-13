const fs = require("fs"); //file system
const http = require("http");
const url = require("url");

///////////////////////////
// File

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
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   err
//     ? console.log("Error!")
//     : fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//         console.log(data2);
//         fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//           console.log(data3);

//           fs.writeFile(
//             "./txt/final.txt",
//             `${data2}\n${data3}`,
//             "utf-8",
//             (err) => {
//               console.log("file has been written");
//             }
//           );
//         });
//       });
// });

///////////////////////////
// Server
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  //   console.log(req);
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the OVERVIEW!");
  } else if (pathName === "/product") {
    res.end("This is the PRODUCT");
  } else if (pathName === "/api") {
    fs.readFile(`${__dirname}/dev-data/data.json`, "utf-8", (err, data) => {
      res.end(data);
    });
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
    });
    res.end("<h1>This page can't be found</h1>");
  }

  //   console.log(req.url);
  //   res.end("Hello from the server!");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request on port 8000");
});

// Routing : Implementing different acting for different URL

// 404 error: http status code
// http header

// Simple API : Service where can request data
