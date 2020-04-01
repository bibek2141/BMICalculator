/*express module*/
const express = require("express");
const bodyParser = require("body-parser");

const app= express();

/*method to configure the middleware used by the routes of the Express HTTP server object.*/
app.use(bodyParser.urlencoded({extended:true}));

/*Get Method Route*/
app.get("/",function(req,res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

/*Post Method Route*/
app.post("/",function(req,res){
  var height = Number(req.body.height);
  var weight = Number(req.body.weight);

  var BMI = Math.round((703 * weight)/(height * height)*10)/10;
  res.send("Your BMI is: "+ BMI);
});

/*Ports starts a server and listen on port 3000 for connections*/
app.listen(3000,function(){
  console.log("Server started on port 3000.");
});
