const User = require('../Model/UserModel');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const jwt = require("jsonwebtoken")


const createUser = async (req, res) => {
  try {

    const user = await User.findOne({ email:req.body.email });
    if(!user){
      const otp = crypto.randomInt(100000, 999999);

      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(req.body.password, salt);
      const newUser = new User({
        firstname:req.body.firstname,
        lastename:req.body.lastename,
        otp:otp,
        email:req.body.email,
        password:hash
      });
      await newUser.save();
  
      let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, 
        auth: {
            user: 'it20638818@my.sliit.lk',
            pass: '200000601498' 
        }
    })
      const mailOptions = {
        from: 'it20638818@my.sliit.lk',
        to: req.body.email,
        subject: 'OTP verification code',
        text: `Your OTP is ${otp}. Please enter this code in the verification form valid within 5 Mins.`
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      res.status(201).json({ message: 'User registered successfully' });
    }
    if(user){
      res.status(500).json({ message: ' This Mail already exists' });
    }
   
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const otpVerification = async (req,res)=>{
  const { email, otp } = req.body;
  try {
    const user = await User.findOne({ email });
    if(!user){
      return res.status(404).json({ message: 'User not found' });
    }

    if(user.otp !== otp){
      return res.status(400).json({ message: 'Invalid OTP' });
    }

    if(user.createdAt.getTime() + 5 * 60 * 1000 < Date.now()){
      return res.status(400).json({message: 'OTP expired click resent button'})
    }

    if(user.otp === otp){
      user.isActive = true
      await user.save();
      return res.status(200).json({message: 'User registered successfully'})
    }
    
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
}
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const login = async(req,res)=>{
  const { email, password } = req.body;
  const user = await User.findOne({ email:email , isActive:true });
  if(!user){
    return res.status(404).json({ message: 'Invalid email ' });
  }
  if(user){
    bcrypt.compare(password, user.password, async (err, result) => {
      if (err) {
        console.log(err);
      } else if (result) {
        const otp = crypto.randomInt(100000, 999999);
        user.otp = otp;
        user.createdAt = Date.now()
        await user.save();
        let transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 587,
          secure: false, 
          auth: {
              user: 'it20638818@my.sliit.lk',
              pass: '200000601498' 
          }
      })
        const mailOptions = {
          from: 'it20638818@my.sliit.lk',
          to: req.body.email,
          subject: 'Two factor verification code',
          text: `Your OTP is ${otp}. Please enter this code in the verification form valid within 5 Mins.`
        };
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
        return res.status(200).json({userId:user.email})
      } else {
        return res.status(400).json({ message: 'Password not matched' });
      }
    });
  }

}

const message = async (req,res)=>{
  const message = req.body.message
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, 
    auth: {
        user: 'it20637828@my.sliit.lk',
        pass: '991392483V' 
    }
})
  const mailOptions = {
    from: 'admin.@gmail.com',
    to: 'it20637828@my.sliit.lk',
    subject: 'contact Message',
    text: `${message}`
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      return res.status(200).json({message: 'User registered successfully'})
    }
  });
} 

const resendotp = async(req , res)=>{
  const {email} = req.body

  try {
    const user = await User.findOne({ email:email});
    if(user){
      const otp = crypto.randomInt(100000, 999999);
       user.otp = otp;
       user.createdAt = Date.now()
       await user.save();
      let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, 
        auth: {
            user: 'it20637828@my.sliit.lk',
            pass: '991392483V' 
        }
    })
      const mailOptions = {
        from: 'it20637828@my.sliit.lk',
        to: email,
        subject: 'OTP verification code',
        text: `Your OTP is ${otp}. Please enter this code in the verification form valid within 5 Mins.`
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      res.status(200).json({ message: 'successfully OTP sent' });
    }
    if(!user){
      res.status(500).json({ message: 'Invalid email ' });
    }
    
  } catch (error) {
    console.log(error)
    return res.status(400).json({ message: 'somthing wrong' });
  }
}

const forgototp = async(req,res)=>{
  const {email} = req.body

  try {
    const user = await User.findOne({ email:email});
    if(user){
      const otp = crypto.randomInt(100000, 999999);
       user.otp = otp;
       user.createdAt = Date.now()
       await user.save();
      let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, 
        auth: {
            user: 'it20637828@my.sliit.lk',
            pass: '991392483V' 
        }
    })
      const mailOptions = {
        from: 'it20637828@my.sliit.lk',
        to: email,
        subject: 'Password reset code',
        text: `Your OTP is ${otp}. Please enter this code in the verification form valid within 5 Mins.`
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      res.status(200).json({ message: 'successfully OTP sent',userId:user.email });
    }
    if(!user){
      res.status(500).json({ message: 'Invalid email ' });
    }
    
  } catch (error) {
    console.log(error)
    return res.status(400).json({ message: 'somthing wrong' });
  }
}

const ForgototpVerification = async (req,res)=>{
  const { email, otp } = req.body;
  try {
    const user = await User.findOne({ email });
    if(!user){
      return res.status(404).json({ message: 'User not found' });
    }

    if(user.otp !== otp){
      return res.status(400).json({ message: 'Invalid OTP' });
    }

    if(user.createdAt.getTime() + 5 * 60 * 1000 < Date.now()){
      return res.status(400).json({message: 'OTP expired click resent button'})
    }

    if(user.otp === otp){
      return res.status(200).json({userId:user.email})
    }
    
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
}

const NewPassword = async (req,res)=>{
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if(!user){
      return res.status(404).json({ message: 'User not found' });
    }
    if(user){
      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(req.body.password, salt);
      user.password = hash;
      await user.save();
      return res.status(200).json({message: 'Password successfully Changed'})
    }
    
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
}
const TwofactorVerification = async (req,res)=>{
  const { email, otp } = req.body;
  try {
    const user = await User.findOne({ email });
    if(!user){
      return res.status(404).json({ message: 'User not found' });
    }

    if(user.otp !== otp){
      return res.status(400).json({ message: 'Invalid OTP' });
    }

    if(user.createdAt.getTime() + 5 * 60 * 1000 < Date.now()){
      return res.status(400).json({message: 'OTP expired click resent button'})
    }

    if(user.otp === otp){
      user.otp = "";
      const token = jwt.sign({ userId: user._id }, 'sdsawskkajfwsuehgwilflnibwergwsielfugwbjkchwuireyofgwibucnwioe', { expiresIn: '96day' });
      return res.status(200).json({ token:token ,name:`${user.firstname} ${user.lastename}` });
    }
    
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
}
module.exports = {
  createUser,
  getUsers,
  otpVerification,
  login,
  message,
  resendotp,
  forgototp,
  ForgototpVerification,
  NewPassword,
  TwofactorVerification
};