const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const birthday = require("./controllers/birthdaycontroller");
app.use(birthday.getbirthday);

const dailytaskdetails =require("./controllers/employeecontroller")
app.use(dailytaskdetails.dailytaskpost)
app.use(dailytaskdetails.dailytaskget)
app.use(dailytaskdetails.dailytaskdelete)
app.use(dailytaskdetails.employeeappraisalformpost)
app.use(dailytaskdetails.employeeappraisalformget)
app.use(dailytaskdetails.employeeappraisalformdelete)
app.use(dailytaskdetails.leavedetailspost)
app.use(dailytaskdetails.leavedetailsget)
app.use(dailytaskdetails.leavedetailsdelete)
app.use(dailytaskdetails.dailyattendancepost)
app.use(dailytaskdetails.dailyattendanceget)

const  leavedetailsapply = require("./controllers/leavecontroller")
app.use(leavedetailsapply.leavedetailsapplypost)
app.use(leavedetailsapply.leavedetailsapplyget)
app.use(leavedetailsapply.leavedetailsapplygetalready)
app.use(leavedetailsapply.leavedetailsapplydelete)

const logindetails = require("./controllers/logincontroller")
app.use(logindetails.registerpost) 
app.use(logindetails.loginpost)
app.use(logindetails.newpassloginpost)
app.use(logindetails.newpasswordput)
app.use(logindetails.newpassput)

const personalinformationdetails = require("./controllers/personalcontroller")
app.use(personalinformationdetails.bankdetailspost)
app.use(personalinformationdetails.bankdetailsget)
app.use(personalinformationdetails.bankdetailsdelete)
app.use(personalinformationdetails.emergencycontactdelete)
app.use(personalinformationdetails.emergencycontactpost)
app.use(personalinformationdetails.emergencycontactget)
app.use(personalinformationdetails.infogendetailspost)
app.use(personalinformationdetails.infogendetailsget)
app.use(personalinformationdetails.infogendetailsdelete)
app.use(personalinformationdetails.personalinformationpost)
app.use(personalinformationdetails.personalinformationget)
app.use(personalinformationdetails.personalinformationdelete)

app.listen(3001, () => {
  console.log("running server");
});
