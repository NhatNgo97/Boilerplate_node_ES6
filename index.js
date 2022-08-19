import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import morgan from "morgan";

const app = express();

dotenv.config();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("MongoDB connected");
});

app.listen(8000, () => {
  console.log("Server is Running");
});

app.get("/api", (req, res) => {
  res.status(200).json("Hello Worldc");
});
