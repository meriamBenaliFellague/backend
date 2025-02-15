require("dotenv").config();
const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

const createAccount = require("./server/router");
app.use("/register", createAccount);

const loginAccount = require("./server/router");
app.use("/login", createAccount);

//database connection

const mongoose = require("mongoose");
const router = require("./server/router");
const dbUrl = process.env.dbUrl;

mongoose
  .connect(dbUrl) 
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
app.use("/api/logins", router);
