// const lib = require("./lib.js");

// console.log(lib.sum(5, 4), lib.diff(5, 4));

// const a = 5;

// import { isUtf8 } from "buffer";
// import { sum, diff } from "./lib.js";

// console.log(sum(5, 4), diff(5, 4));

const fs = require("fs");

// const txt = fs.readFileSync("demo.txt", "utf-8");
// console.log(txt);

fs.readFile("demo.txt", "utf-8", (err, tx) => {
  console.log(tx);
});
