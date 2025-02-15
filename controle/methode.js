const { Router } = require("express");
const register = require("../model/database");

function create_account(req, res){
    //const account = new register({ id: 1, username: "meriam", email: "be2430423", password: "1234" });
    const { username, email, password } = req.body;
    const id = `post${Math.floor(Math.random() * 100000)}`;
    account
      .save()
      .then((result) => res.status(201).json(result))
      .catch((err) => res.status(400).json({ message: err.message }));
  };

function login_account(req,res){
  const usernamename= "meriam";
  const password= "1234";
    //const { username,password } = req.body;
  if (db.logins.find({username:username,password:password})) {
    //The account exists
    console.log("the account exists");
  } else {
    //Account does not exist
    console.log("the account not exists")
  }
}
module.exports = {create_account
};