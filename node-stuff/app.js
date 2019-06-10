// let setDifferenceFile = require("./set-difference");
// let setIntersection = require("./set-intersection");

// let set1 = ["dogs", "cats", "red", "bananas", "code", "movies"];
// let set2 = ["blue", "horses", "dogs", "code", "rain"];

// console.log(setDifferenceFile.setDifference(set1, set2));

// // // main.js
// // var greetings = require("./set-difference.js");

// // // "Hello"
// // greetings.sayHelloInEnglish();

// // // "Hola"
// // greetings.sayHelloInSpanish();

var express = require("express");
var app = express();
var fs = require("fs");
var path = require("path");
var parser = require("body-parser");

logger = (req, res, next) => {
  req.requestTime = new Date().toISOString();
  let output = `${req.requestTime} ${req.originalUrl}`;
  console.log(output);
  let logFile = fs.createWriteStream(path.join(__dirname, "log.txt"), {
    flags: "a"
  });
  logFile.write(output + "\n");
  next();
};

app.use(logger);
app.use(parser.json());

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.get("/hello/:name", (req, res) => {
  console.log(`got request for "/hello/${req.params.name}`);
  res.send(`hello ${req.params.name}`);
});

app.get("/hello/:firstName/:lastName", (req, res) => {
  //  res.json(req.query);
  res.send(`Hello, ${req.params.firstName} ${req.params.lastName}`);
});

app.get("/hello", (req, res) => {
  res.send(`Hello, ${req.query.firstName} ${req.query.lastName}`);
});

app.get("/apple", (req, res) => {
  res.send("Apple or ale?");
});

app.get("/ale", (req, res) => {
  res.send("Apple or ale?");
});

app.get("/wh[o]+[a]+", (req, res) => {
  res.send("I know, right?");
});

app.get("/word/:word", (req, res) => {
  let word = req.params.word;
  let reversedWord = word
    .split("")
    .reverse()
    .join("");
  res.send(`Word: ${word}\nReversed: ${reversedWord}`);
});

app.get("*", (req, res) => {
  res.status(200).send({
    message: "You landed on *"
  });
});

app.listen(3000, () => {
  console.log(`Example app listening on port 3000!`);
});
