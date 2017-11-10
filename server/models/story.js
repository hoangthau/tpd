const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StorySchema = new Schema({
    title: String,
    content: String,
    userId: String,
});

module.exports = mongoose.model('Story', StorySchema);