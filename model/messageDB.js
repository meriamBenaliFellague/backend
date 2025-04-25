const mongoose = require("mongoose");
const { SchemaUser } = require("../model/UserDB"); 
const AdminDb = mongoose.connection.collection("admin");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'SchemaUser' },
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'AdminDb' },
    content: String,
    timestamp: { type: Date, default: Date.now }
  });