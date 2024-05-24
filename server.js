const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const multer = require("multer");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const app = express();
const path = require('path');
app.use(cors());
dotenv.config();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

const connectToMDB = async () => {
  try {
    await mongoose.connect(process.env.connectionString);
    console.log("successfully connected to mdb");
  } catch (error) {
    console.log(error);
    console.log("unable to connect to mdb");
  }
};

const emailOtpSchema = new mongoose.Schema({
  email: String,
  emailOtp: String,
},  {
  timestamps:
  true
  }); 

const registerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: Number,
  password: String,
}, {
  timestamps:
  true
  }); 


const registerUser = new mongoose.model("registers", registerSchema);


const userOtp = new mongoose.model("otp", emailOtpSchema);

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "19p61a0475vbit@gmail.com",
    pass: "gerq mzbl terj csbk",
  },
});

app.post("/otpSend", upload.none(), async (req, res) => {
  try {
    const email = req.body.email;
    const digits = "0123456789";
    const limit = 4;
    let otp = "";
    for (let i = 0; i < limit; i++) {
      otp += digits[Math.floor(Math.random() * 10)];
    }
    const options = {
      from: "vajjalasaicharan123@gmail.com",
      to: email,
      subject: "EMAIL VERIFICATION FOR IT MONKS SOLUTIONS",
      html: `<p>Enter the otp: ${otp} to verify your email address</p>`,
    };
    await transporter.sendMail(options);
    const companyUser = new userOtp({
      email: email,
      emailOtp: otp,
    });
    await userOtp.insertMany([companyUser]); 
      setTimeout(async () => {
        await userOtp.deleteMany({emailOtp:otp}); 
    },60000)
    res.json({
      status: "success",
      msg: "OTP generated and sent to user successfully",
      dbStatus: "stored to DB successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "failure",
      msg: "unable to send otp to mail",
      dbStatus: "unable to store to DB",
    });
  }
});

app.post("/verifyOtp", upload.none(), async (req, res) => {
    let userOtpVerify = req.body.verifyEmailOtp; 
    const userOtpInDb = await userOtp.find().and({ emailOtp: userOtpVerify });
    console.log(userOtpInDb);
  if (userOtpInDb.length == 1) {
      try {  
          if (userOtpInDb[0].emailOtp === userOtpVerify ) {
              res.json({ status: "success", msg: "user verified successfully" });
          }
          
    } catch (error) {
      console.log(error);
      res.json({ status: "failure", msg: "unable to verify user" });
    }
  } else {
      res.json({ status: "failure", msg: "please check your otp again" });
  }
});

app.post("/register", upload.none(), async (req,res) => { 
  // try {
  //   const userDetails = new registerUser({
  //     firstName: req.body.firstName,
  //     lastName: req.body.lastName,
  //     email: req.body.email,
  //     phone: req.body.phone,
  //     password: req.body.password,
  //   })
  // } catch (error) {
  //   console.log(error);
  //   res.json({ status: "failure", msg: "unbale to register your details" });
  // }

  
  let userData = await registerUser.find().and({ email: req.body.email });
  console.log(userData);  
  if (req.body.firstName == "" || req.body.email == "" || req.body.password == "" || req.body.lastName == "" || req.body.phone == "") {
      res.json({ msg: "please fill your details to signUp",status:"incorrectDetails" });
  } else {
      if (userData.length > 0) {
          res.json({ msg: "user already exists",status:"insert into DB failed" });
      } else {
          try {
              let newUser = new registerUser({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                phone: req.body.phone,
                password: req.body.password,
              })
              await registerUser.insertMany([newUser]);
              res.json({ msg: "user created successfully", status: "success"});
          } catch (error) {
              console.log(error);
              res.json({ msg: "unable to create user", status: "failure" });
          }
     
      }
  }
})

app.post("/login", upload.none(), async (req,res) => {
  let userDetails = await registerUser.find().and({ email: req.body.email });
  if (userDetails.length > 0) { 
    console.log(userDetails[0].password); 
    console.log(req.body.password);
    if (userDetails[0].password == req.body.password) {
      res.json({ status: "success", userData: userDetails});
    }
    else {
      res.json({ status: "failure", msg: "INVALID PASSOWORD"});
    }
  } else {
    res.json({ status: "failure", msg: "INVALID EMAIL"});
  }
});

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('*',(req, res)=>{
    res.sendFile(path.join(__dirname,'client', 'build', 'index.html'))

});


app.listen(process.env.port, () => {
  console.log(`listening to port ${process.env.port}`);
});

connectToMDB();
