const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const registShema = new Schema(
  {
    id: {
      type: String,
      unique: true,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
   password: {
      type: String,
      required: true,
    },
    
  },
  {
    timestamps: true,
  }
);

const regist = mongoose.model("logins", registShema);
module.exports = regist;