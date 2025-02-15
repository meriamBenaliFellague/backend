const { Router } = require("express");
const register = require("../model/database");

function login_account(req,res){
    const username= "meriam";
    const password= "1234";
    //const { username,password } = req.body;
    
        const user = db.logins.findOne({ username: username, password: password });
       if (user!=null) {
      //The account exists
      console.log("the account exists");
    } else {
      //Account does not exist
      console.log("the account not exists");
      res.status(401).json({ message: "Invalid username or password" });
    } 
   
  }

  module.exports = {login_account
  };