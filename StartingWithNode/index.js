const fs = require("fs");

console.log("start");
fs.readFile("./node.txt", "utf-8", (err, data) => {
  console.log("Data is printed for node file", data);
  fs.readFile("./second.txt", "utf-8", (err, data2) => {
    console.log("Data is printed for second file", data2);
    fs.readFile("./third.txt", "utf-8", (err, data3) => {
      console.log("Data is printed for third file", data3);
    });
  });
});

fs.readFile("./fourth.txt", "utf-8", (err, data4) => {
  console.log("Data is printed for fourth file", data4);
});

console.log("end");
