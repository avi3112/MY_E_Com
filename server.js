import express from "express";

import dotenv from "dotenv";
const app = express();

//configure env
dotenv.config();

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
