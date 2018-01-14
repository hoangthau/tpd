const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MentorSchema = new Schema({
  fullName: String,
  occupation: String,
  language: String,
  nationality: String,
  works: String,
  imageUrl: String
});

module.exports = mongoose.model('Mentor', MentorSchema);
