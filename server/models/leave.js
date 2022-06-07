// const mysql = require("mysql");

// const config = require('../config/config.json');

// const dbleave = mysql.createConnection({
//     user: config[3].user,
//     host: config[3].host,
//     password: config[3].password,
//     database: config[3].database,
//   });
//   module.exports = dbleave;

const {Sequelize,DataTypes} = require("sequelize");

const sequelize = new Sequelize("leavedetails","root","password",{
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

const Applyforregulaization = sequelize.define("applyforregulaization",{
  username:DataTypes.STRING,
  approver:DataTypes.STRING,
  date:DataTypes.STRING,
  checkin:DataTypes.STRING,
  checkout:DataTypes.STRING,
  reason:DataTypes.STRING

},{
  createdAt:false,
  updatedAt:false
})
module.exports=Applyforregulaization;