import { config } from "dotenv";
import express from "express";
import cors from "cors";
import db from "./config/dbConfig.js";
import userRouter from './routes/userRouter.js'
config();
const app = express();
const PORT = process.env.PORT;


app.use(cors());
app.use(express.json());
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));


app.use('/api',userRouter)



db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Server listening to port ${PORT}`);
  });
});
