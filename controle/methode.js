const { Router } = require("express");
const { default: mongoose } = require("mongoose");
const { SchemaClient } = require("../model/database"); 
const { SchemaUser } = require("../model/database"); 
const AdminDb = mongoose.connection.collection("Admin");
const bcrypt = require('bcrypt');

//create count client
async function create_account(req, res){
    //const account = new register({ id: 1, username: "meriam", email: "be2430423", password: "1234" });
    const { username, email, password } = req.body;
    const id = `post${Math.floor(Math.random() * 100000)}`;
    const hashedPassword = await bcrypt.hash(password, 10); // الرقم 10 هو مستوى التشفير
    const account = new SchemaClient({ id, username, email, hashedPassword});
    account
      .save()
      .then((result) => res.status(201).json(result))
      .catch((err) => res.status(400).json({ message: err.message }));
  };
//login client
  async function login_account(req,res){
 // const username= "meriam";
  //const password= "1234";
    const { username,password } = req.body;
    const user = await SchemaClient.findOne({ username});
  if (user && await bcrypt.compare(password, user.password)) {
    //The account exists
    console.log("the account exists");
  } else {
    //Account does not exist
    console.log("the account not exists")
  }
}

//create count user
async function create_accountUser(req, res){
  //const account = new register({ id: 1, username: "meriam", email: "be2430423", password: "1234" });
  const { username, email, password } = req.body;
  const id = `post${Math.floor(Math.random() * 100000)}`;
  const hashedPassword = await bcrypt.hash(password, 10); // الرقم 10 هو مستوى التشفير
  const account = new SchemaUser({ id, username, email, hashedPassword});
  account
    .save()
    .then((result) => res.status(201).json(result))
    .catch((err) => res.status(400).json({ message: err.message }));
};
//login user
async function login_accountUser(req,res){
// const username= "meriam";
//const password= "1234";
  const { username,password } = req.body;
  const user = await SchemaUser.findOne({ username});
if (user && await bcrypt.compare(password, user.password)) {
  //The account exists
  console.log("the account exists");
} else {
  //Account does not exist
  console.log("the account not exists")
}
}

//login admin
async function login_accountAdmin(req,res){
  //const username= "admin";const password= "admin";
  const { username,password } = req.body;
    const user = await AdminDb.findOne({ username,password});
  if (user) {
    //The account exists
    console.log("the account exists");
  } else {
    //Account does not exist
    console.log("the account not exists")
  }
  }
module.exports = {create_account, login_account,create_accountUser,login_accountUser,login_accountAdmin
};