const express = require("express");
const router = express.Router();
const methode = require("../controle/methode");

router.get("/", methode.create_accountUser);
module.exports=router;