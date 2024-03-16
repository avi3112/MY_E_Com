import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";

//configure env
dotenv.config();

// database config
connectDB();

// express
const app = express();

// middleware
app.use(express.json());
app.use(morgan("dev"));

// rest api

app.get("/", (req, res) => {
  res.send("<h1>Welcome to my E-com app</h1>");
});

// PORT

const PORT = process.env.PORT || 8080;

// run listen

app.listen(PORT, () => {
  console.log(`Server test running ${process.env.DEV_MODE} on ${PORT}`);
});
