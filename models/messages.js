const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const messageSchema = new Schema({
  name: String,
  birthday: {
    type: Date,
    default: Date.now()
  },
  know_days_left: String
});

module.exports = model("Message", messageSchema);
