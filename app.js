require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bcrypt = require("bcrypt");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/Home/register',express.static(path.join(__dirname, "public/loginClient")));
app.use('/Home/LoginAdmin/Admin',express.static(path.join(__dirname, "public/AdminDashboard")));
app.use('/Home',express.static(path.join(__dirname, "public/HomePage")));
app.use('/Home/LoginAdmin',express.static(path.join(__dirname, "public/loginAdmin")));
app.use('/Home/LoginAdmin/Dashboard',express.static(path.join(__dirname, "public/AdminDashboard")));
app.use('/Reclamation',express.static(path.join(__dirname, "public/client")));

const session = require('express-session');
app.use(session({
  secret: 'secret-key',         // 🔑 مفتاح التشفير (بدلوه في مشروعك الحقيقي)
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }     // ⚠️ حطها `true` فقط إذا كنت تستعمل HTTPS
}));


const authRoutes = require("./server/ClientRegist");
app.use(authRoutes);
const adminRoutes = require("./server/AdminLogin");
app.use(adminRoutes);

const createAccount = require("./server/ClientRegist");
app.use("/api/register", createAccount);

const loginAccount = require("./server/ClientLogin");
app.use("/api/login",loginAccount);

const createReclamation = require("./server/AddReclamation");
app.use("/api/addReclamation",createReclamation);

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

//.....

app.get("/Home", (req, res) => {
  res.sendFile(path.join(__dirname, "public/HomePage","index.html"));
});

app.get("/Home/LoginAdmin", (req, res) => {
  res.sendFile(path.join(__dirname, "public/loginAdmin","login.html"));
});

app.get("/Reclamation", (req, res) => {
  res.sendFile(path.join(__dirname, "public/client","index.html"));
});

app.get("/Home/LoginAdmin/Dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "public/AdminDashboard","index.html"));
});



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
