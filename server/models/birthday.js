// const mysql = require("mysql");

// const config = require('../config/config.json');

//   const dbbirthday = mysql.createConnection({
//     user: config[1].user,
//     host: config[1].host,
//     password: config[1].password,
//     database: config[1].database,
//   });
//   module.exports = dbbirthday;

const {Sequelize,DataTypes} = require("sequelize");

const sequelize = new Sequelize("birthday","root","password",{
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
  const employee = sequelize.define("employee",{
      name:DataTypes.STRING,
      date:DataTypes.INTEGER,
      month:DataTypes.INTEGER
  },{
     createdAt:false,
     updatedAt:false
  }

  )
module.exports = employee;

