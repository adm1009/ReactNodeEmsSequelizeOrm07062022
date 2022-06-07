// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const app = express();
// const emp = require("../models/employee")
// app.use(express.json());
// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));


// exports.dailytaskpost=app.post("/employeedetailsdailytask", (req, res) => {
//   return await emp.create({
//     const username = req.body.username;
//     const date= req.body.date;
//     const project = req.body.project;
//     const task = req.body.task;
//     const time = req.body.time;
//     const status = req.body.status;
//     const blockingissue = req.body.blockingissue;
//     const responsibleperson = req.body.responsibleperson;
//   })
//     emp.query(
//       "INSERT INTO dailytask (username,date,project,task,time,status,blockingissue,responsibleperson) VALUES (?,?,?,?,?,?,?,?)",
//       [username,date, project, task, time, status, blockingissue, responsibleperson],
//       (err, result) => {
//         console.log(err);
//       }
//     );
//   });
  
//   exports.dailytaskget=app.get("/employeedetailsgetdailytask", (req, res) => {
//     emp.query("SELECT * FROM dailytask", (err, result) => {
//       res.send(result);
//     });
//   });
  
//   exports.dailytaskdelete=app.delete("/employeedetailsdeletedailytask/:id", (req, res) => {
//     const id = req.params.id;
//     emp.query("DELETE FROM dailytask WHERE id=?", id, (err, result) => {
//       if (err) {
//         console.log(error);
//       } else {
//         res.send(result);
//       }
//     });
//   });
//   exports.employeeappraisalformpost=app.post("/employeedetailsemployeeappraisalform", (req, res) => {
//     const username = req.body.username;
//     const duration = req.body.duration;
//     const goals = req.body.goals;
//     const skills = req.body.skills;
//     emp.query(
//       "INSERT INTO employeeappraisalform (username,duration,goals,skills) VALUES (?,?,?,?)",
//       [username, duration, goals, skills],
//       (err, result) => {
//         console.log(err);
//       }
//     );
//   });
  
//   exports.employeeappraisalformget=app.get("/employeedetailsgetemployeeappraisalform", (req, res) => {
//     emp.query("SELECT * FROM employeeappraisalform", (err, result) => {
//       res.send(result);
//     });
//   });
//   exports.employeeappraisalformdelete = app.delete(
//     "/employeedetailsdeleteemployeeappraisalform/:username",
//     (req, res) => {
//       const username = req.params.username;
//       emp.query(
//         "DELETE FROM employeeappraisalform WHERE username=?",
//         username,
//         (err, result) => {
//           if (err) {
//             console.log(error);
//           } else {
//             res.send(result);
//           }
//         }
//       );
//     }
//   );
//   exports.leavedetailspost = app.post("/employeedetailsleavedetails", (req, res) => {
//     const username = req.body.username;
//     const date = req.body.date;
//     const reason = req.body.reason;
//     emp.query(
//       "INSERT INTO leavedetails (username,date,reason) VALUES (?,?,?)",
//       [username, date, reason],
//       (err, result) => {
//         console.log(err);
//       }
//     );
//   });
  
//   exports.leavedetailsget = app.get("/employeedetailsgetleavedetails", (req, res) => {
//     emp.query("SELECT * FROM leavedetails", (err, result) => {
//       res.send(result);
//     });
//   });
//   exports.leavedetailsdelete = app.delete("/employeedetailsdeleteleavedetails/:id", (req, res) => {
//     const id = req.params.id;
//     emp.query("DELETE FROM leavedetails WHERE id=?", id, (err, result) => {
//       if (err) {
//         console.log(error);
//       } else {
//         res.send(result);
//       }
//     });
//   });
//   exports.dailyattendancepost = app.post("/employeedetailsdailyattendance", (req, res) => {
//     const username = req.body.username;
//     const indate = req.body.indate;
//     const inmonth = req.body.inmonth;
//     const inyear = req.body.inyear;
//     const inhour = req.body.inhour;
//     const inmin = req.body.inmin;
//     const insec = req.body.insec;
//     const outdate = req.body.outdate;
//     const outmonth = req.body.outmonth;
//     const outyear = req.body.outyear;
//     const outhour = req.body.outhour;
//     const outmin = req.body.outmin;
//     const outsec = req.body.outsec;
//     emp.query(
//       "INSERT INTO dailyattendance (username,indate,inmonth,inyear,inhour,inmin,insec,outdate,outmonth,outyear,outhour,outmin,outsec) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",
//       [
//         username,
//         indate,
//         inmonth,
//         inyear,
//         inhour,
//         inmin,
//         insec,
//         outdate,
//         outmonth,
//         outyear,
//         outhour,
//         outmin,
//         outsec,
//       ],
//       (err, result) => {
//         console.log(err);
//       }
//     );
//   });
  
//   exports.dailyattendanceget =app.get("/employeedetailsgetdailyattendance", (req, res) => {
//     emp.query("SELECT * FROM dailyattendance", (err, result) => {
//       res.send(result);
//     });
//   });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const emp = require("../models/employee")
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));


exports.dailytaskpost=app.post("/employeedetailsdailytask", (req, res) => {
  return  emp.create({
    username : req.body.username,
    date: req.body.date,
    project :req.body.project,
    task : req.body.task,
    time : req.body.time,
    status : req.body.status,
    blockingissue : req.body.blockingissue,
    responsibleperson : req.body.responsibleperson
  }).
  then(function(emp){
    if(emp){
      res.send(emp)
    }else{
      res.status(400).send("error happened")
    }
  })
  
});
  exports.dailytaskget=app.get("/employeedetailsgetdailytask", (req, res) => {
    return emp.findAll({}).
    then(function(emp){
      if(emp){
        res.send(emp)
      }else{
        res.status(400).send("error happened")
      }
    })
    
  });
  
  exports.dailytaskdelete=app.delete("/employeedetailsdeletedailytask/:id", (req, res) => {
    const id = req.params.id;
    return emp.destroy({where:{id:id}}).
    then(function(emp){
      if(emp){
        res.send(emp)
      }else{
        res.status(400).send("error happened")
      }
    })
  });
  exports.employeeappraisalformpost=app.post("/employeedetailsemployeeappraisalform", (req, res) => {
    return emp.create({
     username : req.body.username,
     duration : req.body.duration,
     goals : req.body.goals,
     skills: req.body.skills
  }).
  then(function(emp){
    if(emp){
      res.send(emp)
    }else{
      res.status(400).send("error happened")
    }
  })
});
  exports.employeeappraisalformget=app.get("/employeedetailsgetemployeeappraisalform", (req, res) => {
    return emp.findAll({}).
    then(function(emp){
      if(emp){
        res.send(emp)
      }else{
        res.status(400).send("error happened")
      }
    })
  });
  exports.employeeappraisalformdelete = app.delete(
    "/employeedetailsdeleteemployeeappraisalform/:username",
    (req, res) => {
      const username = req.params.username;
      return emp.destroy({where:{username:username}}).
      then(function(emp){
        if(emp){
          res.send(emp)
        }else{
          res.status(400).send("error happened")
        }
      })
    });
      
  exports.leavedetailspost = app.post("/employeedetailsleavedetails", (req, res) => {
    return emp.create({
     username : req.body.username,
     date : req.body.date,
     reason : req.body.reason
  }).
  then(function(emp){
    if(emp){
      res.send(emp)
    }else{
      res.status(400).send("error happened")
    }
  })
});
  exports.leavedetailsget = app.get("/employeedetailsgetleavedetails", (req, res) => {
    return emp.findAll({}).
      then(function(emp){
        if(emp){
          res.send(emp)
        }else{
          res.status(400).send("error happened")
        }
      })
    });
    
  exports.leavedetailsdelete = app.delete("/employeedetailsdeleteleavedetails/:id", (req, res) => {
    const id = req.params.id;
    return emp.destroy({where:{id:id}}).
    then(function(emp){
      if(emp){
        res.send(emp)
      }else{
        res.status(400).send("error happened")
      }
    })
  });
    
  exports.dailyattendancepost = app.post("/employeedetailsdailyattendance", (req, res) => {
    return emp.create({
     username : req.body.username,
     indate : req.body.indate,
     inmonth : req.body.inmonth,
     inyear : req.body.inyear,
     inhour : req.body.inhour,
     inmin : req.body.inmin,
     insec : req.body.insec,
     outdate : req.body.outdate,
     outmonth : req.body.outmonth,
     outyear : req.body.outyear,
     outhour : req.body.outhour,
     outmin : req.body.outmin,
     outsec : req.body.outsec
  }).
  then(function(emp){
    if(emp){
      res.send(emp)
    }else{
      res.status(400).send("error happened")
    }
  })
});
  
  exports.dailyattendanceget =app.get("/employeedetailsgetdailyattendance", (req, res) => {
    return emp.findAll({}).
    then(function(emp){
      if(emp){
        res.send(emp)
      }else{
        res.status(400).send("error happened")
      }
    })
  });
   