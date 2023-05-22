const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // name: { type: String },
  // additional fields
});

exports.userSchema = mongoose.model('UseSchema', userSchema);

// module.exports = User;
