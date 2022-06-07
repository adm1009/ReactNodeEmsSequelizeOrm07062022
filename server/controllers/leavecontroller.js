const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const live = require("../models/leave")
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));


exports.leavedetailsapplypost=app.post("/leavedetailsapply", (req, res) => {
  return live.create({
     username : req.body.username,
     approver : req.body.approver,
     date : req.body.date,
     checkin : req.body.checkin,
     checkout : req.body.checkout,
     reason : req.body.reason
  }).
  then(function(live){
    if(live){
      res.send(live)
    }else{
      res.status(400).send("error happened")
    }
  })
  
});
  exports.leavedetailsapplyget=app.get("/leavedetailsgetapply", (req, res) => {
    return live.findAll({}).
    then(function(live){
      if(live){
        res.send(live)
      }else{
        res.status(400).send("error happened")
      }
    })
    
  });
  exports.leavedetailsapplygetalready=app.get("/leavedetailsalreadyapplied", (req, res) => {
    return live.findAll({}).
    then(function(live){
      if(live){
        res.send(live)
      }else{
        res.status(400).send("error happened")
      }
    })
    
  });
    
  exports.leavedetailsapplydelete=app.delete("/leavedetailsdeleteapply/:id", (req, res) => {
    const id = req.params.id;
    return live.destroy({where:{id:id}}).
    then(function(live){
      if(live){
        res.send(live)
      }else{
        res.status(400).send("error happened")
      }
    })
    
  });
    