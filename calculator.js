// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser"); // use to parse request data from client to server

const app = express();
app.use(bodyParser.urlencoded({extended: true})); // to use bodyParser with express

// create route
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
  // console.log(__dirname);
});

app.post("/", function(req, res){

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;
  // console.log(req.body);
  res.send("The result of the calculation is " + result);
});

app.get("/bmiCalculator", function(req, res){
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmiCalculator", function(req, res){
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var bmi = weight / (height * height);

  res.send("Your bmi is " + bmi);

});

// server
app.listen(3000, function(){
  console.log("Server running on port 3000");
});
