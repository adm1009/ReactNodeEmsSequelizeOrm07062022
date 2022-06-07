const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const log = require("../models/login");
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));


exports.registerpost=app.post("/register", (req, res) => {
  return log.create({
     username : req.body.username,
     password : req.body.password,
     question : req.body.question,
     answer : req.body.answer
  }).
  then(function(log){
    if(log){
      res.send(log)
    }else{
      res.status(400).send("error happened")
    }
  })
  
});
  
  exports.loginpost=app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    return log.findOne({where:{username:username,password:password}}).
    then(function(log){
      if(log){
        res.send(log)
      }else{
        res.send({message: "Please enter correct username and password"})
      }
    })
    
  });
  exports.newpassloginpost=app.post("/newpasslogin", (req, res) => {
    const username = req.body.username;
    const question = req.body.question;
    const answer = req.body.answer;
    return log.findOne({where:{username:username,question:question,answer:answer}}).
    then(function(log){
      if(log){
        res.send(log)
      }else{
        res.send({message:"wrong choice of question and answer"})
      }
    })
    
  });
  exports.newpasswordput=app.put("/newpassword", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    return log.update({password:req.body.password},{where:{username:username,password:password}}).
    then(function(log){
      if(log){
        res.send(log)
      }else{
        res.send("error happened")
      }
    })
  });
    
  exports.newpassput=app.put("/newpass", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
  
    return log.update({password:req.body.password},{where:{username:username,password:password}}).
    then(function(log){
      if(log){
        res.send(log)
      }else{
        res.send("error happened")
      }
    })
  });