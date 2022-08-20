import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import morgan from "morgan";
import authorRouter from "./routes/authorRouter";
import bookRouter from "./routes/bookRouter";

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

//ROUTES
app.use("/v1/author", authorRouter);
app.use("/v1/book", bookRouter);

app.get("/", (req, res) => {
  res.status(200).json("Hello Worldc");
});
