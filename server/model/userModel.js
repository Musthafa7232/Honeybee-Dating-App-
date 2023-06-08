import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
  },
  email: {
    type: String,
  },
  birthday: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
  profilePic: {
    type: String,
  },
  coverPic: {
    type: String,
  },
  images:{
    type:[String]
  },
  location:{
    type:String
  },
  Preference:{
    type:String,
    enum: ["male", "female", "everyone"],
  },
  LookingFor:{
    type:String
  },
  realationshipStatus:{
    type:String
  },
  faith:{
    type:String
  },
  smoking:{
    type:String
  },
  drinking:{
    type:String
  },
  bio:{
    type:String
  },
  myStory:{
    type:String
  },
  HoneyVipType:{
    type:String,
    enum: ["silver", "gold", "platinum"],
  },
  HoneyVipVerified:{
    type:String,
    enum: ["pending", "verified", "rejected"],
  }
},{ timestamps: true });

const Users = mongoose.model("Users", userSchema)

export default Users