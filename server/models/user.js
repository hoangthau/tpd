const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  fullName: String,
  email: String,
  username: String,
  password: String,
  joinDate: Number,
  coverImg: String
});

module.exports = mongoose.model('User', UserSchema);
