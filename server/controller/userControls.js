import userModel from "../model/userModel.js";
import {sendOtp,checkOtp} from "../utils/Twilio.js"
import {createUserToken}from '../utils/jwt.js'
export const userDetails = async (req, res) => {
  console.log(req.body);
  const { fullName, email, birthday, age, gender, location,phone,Preference } = req.body;
  console.log(fullName, email, birthday, age, gender, location,phone,Preference);
  const user = new userModel({
    fullName,
    email,
    birthday,
    age,
    gender,
    location,
    phone,
    Preference,
    isVerified:true
  });
  console.log(user);
  try {
    await user.save();
    const token=createUserToken(user)
    console.log(token);
    res.json({ success: true,redirect:'/home',user,token }).status(200);
  } catch (err) {
    console.log(err);
    res.json(err).status(401);
  }
};

export const phoneOtp =async(req, res) => {
  const phone = req.body.phone;
  try {
    if (phone) {
      console.log(phone);
     await sendOtp(phone);
      res.json({ success: true }).status(200);
    } 
  } catch (err) {
    console.log(err);
    res.json({ success: false ,message:'some error occured'});
  }
};

export const verifyOtp=async(req,res)=>{
try{
  console.log(req.body);
  
const {otp,phone}=req.body
const checking = await checkOtp(otp,phone)
console.log(checking.status);
if (checking.status ==='approved') {
try{
  console.log('hi');
  const user=await userModel.findOne({phone})
  console.log(user,'hi');
  if(!user){
    res.json({success:true,newUser:true,redirect:"/createAccount"})
  }else{
    const token=createUserToken(user)
    console.log(token);
    res.json({success:true,token,redirect:'/home'})
  }
}catch(err){
  res.json(err).status(401);
}
}else{
  console.log(err);
}
}catch(err){
  console.log(err);
  res.json(err).status(401);
}
}

export const userData=async(req,res)=>{
  try{
const user=await userModel.findById(req.user.id)
res.json(user)
  }catch(err){
res.status(400).send('user not found')
  }
}