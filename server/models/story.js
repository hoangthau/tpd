const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StorySchema = new Schema({
    title: String,
    content: String,
    userId: String,
    date: Number,
    fullName: String,
    email: String,
    imageUrl: String
});

module.exports = mongoose.model('Story', StorySchema);