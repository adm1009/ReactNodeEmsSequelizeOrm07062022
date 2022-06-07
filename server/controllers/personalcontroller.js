const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const prsonal = require("../models/personal")
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// const bank=prsonal.Bankdetails;
exports.bankdetailspost=app.post("/personaldetailsbankdetails", (req, res) => {
  return prsonal.create({
     username : req.body.username,
     pancardno : req.body.pancardno,
     accountno : req.body.accountno,
     bankname : req.body.bankname
    }).
    then(function(prsonal){
      if(prsonal){
        res.send(prsonal)
      }else{
        res.status(400).send("error happened")
      }
    })
  });
    
  exports.bankdetailsget=app.get("/personaldetailsgetbankdetails", (req, res) => {
    return prsonal.findAll({}).
    then(function(prsonal){
      if(prsonal){
        res.send(prsonal)
      }else{
        res.status(400).send("error happened")
      }
    })
  });
    
  exports.bankdetailsdelete=app.delete("/personaldetailsdeletebankdetails/:username", (req, res) => {
    const username = req.params.username;
    return prsonal.destroy({where:{username:username}}).
    then(function(prsonal){
      if(prsonal){
        res.send(prsonal)
      }else{
        res.status(400).send("error happened")
      }
    })
  });
    
  exports.emergencycontactpost=app.post("/personaldetailsemergencycontact", (req, res) => {
    return prsonal.create({
     username : req.body.username,
     firstpersonname : req.body.firstpersonname,
     firstpersonno : req.body.firstpersonno,
     secondpersoname : req.body.secondpersoname,
     secondpersonno : req.body.secondpersonno
  }).
  then(function(prsonal){
    if(prsonal){
      res.send(prsonal)
    }else{
      res.status(400).send("error happened")
    }
  })
});
    
  exports.emergencycontactget=app.get("/personaldetailsgetemergencycontact", (req, res) => {
    return prsonal.findAll({}).
    then(function(prsonal){
      if(prsonal){
        res.send(prsonal)
      }else{
        res.status(400).send("error happened")
      }
    })
  });
    
  exports.emergencycontactdelete=app.delete("/personaldetailsdeleteemergencycontact/:username", (req, res) => {
    const username = req.params.username;
    return prsonal.destroy({where:{username:username}}).
    then(function(prsonal){
      if(prsonal){
        res.send(prsonal)
      }else{
        res.status(400).send("error happened")
      }
    })
  });
   
  
  exports.infogendetailspost=app.post("/personaldetailsinfogendetails", (req, res) => {
    return prsonal.create({
     username : req.body.username,
     skillexp : req.body.skillexp,
     skillknow : req.body.skillknow,
     yearofexp : req.body.yearofexp,
     certificate : req.body.certificate
  }).
  then(function(prsonal){
    if(prsonal){
      res.send(prsonal)
    }else{
      res.status(400).send("error happened")
    }
  })
});
  
  exports.infogendetailsget=app.get("/personaldetailsgetinfogendetails", (req, res) => {
    return prsonal.findAll({}).
    then(function(prsonal){
      if(prsonal){
        res.send(prsonal)
      }else{
        res.status(400).send("error happened")
      }
    })
  });
   

  exports.infogendetailsdelete=app.delete("/personaldetailsdeleteinfogendetails/:username", (req, res) => {
    const username = req.params.username;
    return prsonal.destroy({where:{username:username}}).
    then(function(prsonal){
      if(prsonal){
        res.send(prsonal)
      }else{
        res.status(400).send("error happened")
      }
    })
  });
  exports.personalinformationpost=app.post("/personaldetailspersonalinformation", (req, res) => {
    return prsonal.create({
     username : req.body.username,
     employeecode : req.body.employeecode,
     firstname : req.body.firstname,
     middlename : req.body.middlename,
     lastname : req.body.lastname,
     gender : req.body.gender,
     dateofbirth : req.body.dateofbirth,
     mobileno : req.body.mobileno,
     emailid : req.body.emailid,
     address : req.body.address,
     passportno : req.body.passportno,
     bloodgroup : req.body.bloodgroup
  }).
  then(function(prsonal){
    if(prsonal){
      res.send(prsonal)
    }else{
      res.status(400).send("error happened")
    }
  })
});
   
  
  exports.personalinformationget=app.get("/personaldetailsgetpersonalinformation", (req, res) => {
    return prsonal.findAll({}).
    then(function(prsonal){
      if(prsonal){
        res.send(prsonal)
      }else{
        res.status(400).send("error happened")
      }
    })
  });
    
  exports.personalinformationdelete=app.delete(
    "/personaldetailsdeletepersonalinformation/:username",
    (req, res) => {
      const username = req.params.username;
      return prsonal.destroy({where:{username:username}}).
      then(function(prsonal){
        if(prsonal){
          res.send(prsonal)
        }else{
          res.status(400).send("error happened")
        }
      })
    });
     