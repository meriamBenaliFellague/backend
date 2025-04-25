require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bcrypt = require("bcrypt");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public/HomePage")));


const createAccount = require("./server/ClientRegist");
app.use("/api/register", createAccount);

const loginAccount = require("./server/ClientLogin");
app.use("/api/login",loginAccount);

const createReclamation = require("./server/AddReclamation");
app.use("/api/addReclamation",createReclamation);

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "public/loginClient","login.html"));
});


const loginAdmin = require("./server/AdminLogin");
app.use("/api/Admin",loginAdmin);

const loginUser = require("./server/UserLogin");
app.use("/api/UserLogin",loginUser);

const createAccountUser = require("./server/UserRegist");
app.use("/api", createAccountUser);

const deletReclamation = require("./server/DeletUser");
app.use("/api/deletReclamation", deletReclamation);

const create_reclamation = require("./server/AddReclamation");
app.use("/api/AddReclamation", create_reclamation);

//database connection


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
