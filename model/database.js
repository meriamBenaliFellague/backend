const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const client = new Schema(
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

const SchemaClient = mongoose.model("Client", client);
const SchemaUser = mongoose.model("Responsable", client);
module.exports.SchemaClient = SchemaClient;
