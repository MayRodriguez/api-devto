// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//     firstName: {
//         type: String,
//         required: true,
//         minLength: 2,
//         masLength: 50,
//         trim: true,
//     },
//     lastName: {
//         type: String,
//         required: true,
//         minLength: 2,
//         masLength: 50,
//         trim: true,
//     },
//     email: {
//         type: String,
//         match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, 
//         required: true,
//         trim: true,
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true,
//     },
//     program: {
//         type: String,
//         enum: ["javascript", "python", "ios"],
//         required: true,
//         trim: true,
//     },
//     created: {
//         type: Date,
//         required: true,
//         default: new Date()
//     },
//     updated: {
//         type: Date,
//         required: true,
//         default: new Date()
//     }
// });

// module.exports = mongoose.model("user", userSchema);

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50,
    trim: true,
  },
  profilePic: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50,
    trim: true,
  },
  email: {
    type: String,
    match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  created_at: {
    type: Date,
    required: true,
    default: new Date(),
  },
  updated_at: {
    type: Date,
    required: true,
    default: new Date(),
  },
});

module.exports = mongoose.model("User", userSchema);
