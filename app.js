require("dotenv").config();
const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

const createAccount = require("./server/ClientRegist");
app.use("/api/register", createAccount);

const loginAccount = require("./server/ClientLogin");
app.use("/api/login",loginAccount);

const loginAdmin = require("./server/AdminLogin");
app.use("/api/Admin",loginAdmin);

const loginUser = require("./server/UserLogin");
app.use("/api/UserLogin",loginUser);

const createAccountUser = require("./server/UserRegist");
app.use("/api/UserRegister", createAccountUser);


//database connection

const mongoose = require("mongoose");
const router = require("./server/ClientLogin");
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
