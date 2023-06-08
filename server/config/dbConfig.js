import mongoose from "mongoose"
import { config } from "dotenv"
config()
mongoose.set("strictQuery", true)
mongoose.connect(process.env.MONGOURL)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.log("Error connecting to the database:", error);
  });

export default mongoose.connection