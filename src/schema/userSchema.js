const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: ["owner", "user"],
    default: "user",
  },
}, {
  timestamps: true, 
});


const User = mongoose.model('User', userSchema);

module.exports = User;
