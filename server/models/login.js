// const mysql = require("mysql");

// const config = require('../config/config.json');

// const dblogin = mysql.createConnection({
//     user: config[0].user,
//     host: config[0].host,
//     password: config[0].password,
//     database: config[0].database,
//   });
//   module.exports = dblogin;

const {Sequelize,DataTypes} = require("sequelize");

const sequelize = new Sequelize("logindata","root","password",{
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

const Users = sequelize.define("users",{
  username:DataTypes.STRING,
  password:DataTypes.STRING,
  question:DataTypes.STRING,
  answer:DataTypes.STRING,
  
},{
  createdAt:false,
  updatedAt:false
})
module.exports=Users;

  