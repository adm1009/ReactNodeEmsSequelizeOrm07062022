// const mysql = require("mysql");

// const config = require('../config/config.json');

//   const dbemployee = mysql.createConnection({
//     user: config[4].user,
//     host: config[4].host,
//     password: config[4].password,
//     database: config[4].database,
//   });
//   module.exports = dbemployee;

const {Sequelize,DataTypes} = require("sequelize");

const sequelize = new Sequelize("employeedetails","root","password",{
    host:"localhost",
    dialect:"mysql",
    logging:true,
    pool:{max:5,min:0,idle:1000}
});

sequelize.authenticate()
.then(()=>{
    console.log("connected");
})
.catch((err)=>{
  console.log("Error"+err);
})

// const db ={};
// db.Sequelize=Sequelize;
// db.sequelize=sequelize;
// db.sequelize.sync({force:false})
// .then(()=>{
//     console.log("sync done");
// })

const Dailytask = sequelize.define("dailytask",{
  username:DataTypes.STRING,
  date:DataTypes.STRING,
  project:DataTypes.STRING,
  task:DataTypes.STRING,
  time:DataTypes.STRING,
  status:DataTypes.STRING,
  blockingissues:DataTypes.STRING,
  responsibleperson:DataTypes.STRING,
},{
  createdAt:false,
  updatedAt:false
})
exports=Dailytask;

const Employeeappraisalform = sequelize.define("employeeappraisalform",{
  username:DataTypes.STRING,
  duration:DataTypes.STRING,
  goals:DataTypes.STRING,
  skills:DataTypes.STRING
},{
  createdAt:false,
  updatedAt:false
})
exports=Employeeappraisalform;

const Leavedetails = sequelize.define("leavedetails",{
  username:DataTypes.STRING,
  date:DataTypes.STRING,
  reason:DataTypes.STRING
},{
  createdAt:false,
  updatedAt:false
})
exports=Leavedetails;

const Dailyattendance = sequelize.define("dailyattendance",{
  username:DataTypes.STRING,
  indate:DataTypes.INTEGER,
  inmonth:DataTypes.INTEGER,
  inyear:DataTypes.INTEGER,
  inhour:DataTypes.INTEGER,
  inmin:DataTypes.INTEGER,
  insec:DataTypes.INTEGER,
  outdate:DataTypes.INTEGER,
  outmonth:DataTypes.INTEGER,
  outyear:DataTypes.INTEGER,
  outhour:DataTypes.INTEGER,
  outmin:DataTypes.INTEGER,
  outsec:DataTypes.INTEGER,

},{
  createdAt:false,
  updatedAt:false
})
exports=Dailyattendance;