const express = require("express");
const router = express.Router();
const methode = require("../controle/methode");

router.get("/", methode.login_accountAdmin);
module.exports=router;