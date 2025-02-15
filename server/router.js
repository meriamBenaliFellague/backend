const express = require("express");
const router = express.Router();
const Controller = require("../controle/methode");
const Login = require("../controle/login");


router.get("/", Login.login_account);
module.exports=router;