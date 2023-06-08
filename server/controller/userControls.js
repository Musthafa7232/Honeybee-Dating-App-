import userModel from '../model/userModel.js'

export const userDetails=async (req,res)=>{
const {fullName,email,birthday,age,gender,location} =req.body
const user=new userModel( {fullName,email,birthday,age,gender,location})
try{
    await user.save()
    res.json({success:true}).status(200)
}catch(err){
    res.json(err).status(401)
}
}
