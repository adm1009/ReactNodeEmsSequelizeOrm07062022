// const mysql = require("mysql");

// const config = require('../config/config.json');

//   const dbpersonal = mysql.createConnection({
//     user: config[2].user,
//     host: config[2].host,
//     password: config[2].password,
//     database: config[2].database,
//   });
//   module.exports = dbpersonal;

const {Sequelize,DataTypes} = require("sequelize");

const sequelize = new Sequelize("personaldetails","root","password",{
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

const Bankdetails = sequelize.define("bankdetails",{
  username:DataTypes.STRING,
  pancardno:DataTypes.STRING,
  acccountno:DataTypes.STRING,
  bankname:DataTypes.STRING,
  
},{
  createdAt:false,
  updatedAt:false
})
exports=Bankdetails;

const Emergencycontact = sequelize.define("emergencycontact",{
  username:DataTypes.STRING,
  firstpersonname:DataTypes.STRING,
  firstpersonno:DataTypes.STRING,
  secondpersoname:DataTypes.STRING,
  secondpersonno:DataTypes.STRING
  
},{
  createdAt:false,
  updatedAt:false
})
exports=Emergencycontact;

const Infogendetails = sequelize.define("infogendetails",{
  username:DataTypes.STRING,
  skillexp:DataTypes.STRING,
  skillknow:DataTypes.STRING,
  yearofexp:DataTypes.STRING,
  certificate:DataTypes.STRING
  
},{
  createdAt:false,
  updatedAt:false
})
exports=Infogendetails;

const Personalinformation = sequelize.define("personalinformation",{
  username:DataTypes.STRING,
  employeecode:DataTypes.STRING,
  firstname:DataTypes.STRING,
  middlename:DataTypes.STRING,
  lastname:DataTypes.STRING,
  gender:DataTypes.STRING,
  dateofbirth:DataTypes.STRING,
  mobileno:DataTypes.STRING,
  emailid:DataTypes.STRING,
  address:DataTypes.STRING,
  passportno:DataTypes.STRING,
  bloodgroup:DataTypes.STRING
},{
  createdAt:false,
  updatedAt:false
})
exports=Personalinformation;

