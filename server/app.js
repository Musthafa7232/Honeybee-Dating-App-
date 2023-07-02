import { config } from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./Frameworks/database/dbConfig.js";
import userRouter from "./interfaces/routes/userRouter.js";
config();
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));

app.use("/api", userRouter);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening to port ${PORT}`);
  });
});
