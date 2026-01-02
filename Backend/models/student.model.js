const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  gender: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  placeOfBirth: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
});

module.exports = mongoose.model("Students", studentSchema);
