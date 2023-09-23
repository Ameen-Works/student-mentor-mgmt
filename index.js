// import { Express } from "express";
const express = require("express");
// import express from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const StudentRoutes = require("./Routes/StudentRoutes");
const MentorRoutes = require("./Routes/MentorRoutes");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });

const dbURL = process.env.DB_URL;

mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const con = mongoose.connection;
try {
  con.on("open", () => {
    console.log("MongoDB Connected!!!");
  });
} catch (error) {
  console.log(error);
}

const app = express();
// app.use(Express.json());

app.use(bodyParser.json());
app.use(cors());

app.use("/students", StudentRoutes);
app.use("/mentors", MentorRoutes);

app.get("/", (req, res) => {
  res.send("Hello, Kindly change the route to /students or /mentors");
});

app.listen(4000, () => {
  console.log("http://localhost:4000/students");
});
