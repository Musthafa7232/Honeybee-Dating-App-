import mongoose from "mongoose"
import { config } from "dotenv"
config()


const connectDB=async ()=>{
  try {
    await mongoose.connect((process.env.MONGOURL),{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
     console.log("Connected to the database");
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1);
  }
}
export default connectDB;