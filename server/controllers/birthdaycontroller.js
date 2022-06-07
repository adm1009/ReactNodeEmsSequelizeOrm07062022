// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const app = express();
// const bday = require("../models/birthday")
// app.use(express.json());
// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));

// exports.getbirthday = app.get("/birthdays", (req, res) => {
//     bday.query("SELECT * FROM employees", (err, result) => {
//       res.send(result);
//     });
//   });

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const bday = require("../models/birthday")
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

exports.getbirthday = app.get("/birthdays", (req, res) => {
    return bday.findAll({}).
    then(function(bday){
      if(bday){
        res.send(bday)
      }else{
        res.status(400).send("error in fetching data")
      }
    })
    
  });