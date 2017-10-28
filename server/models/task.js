const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    title: String,
    isDone: Boolean
});

module.exports = mongoose.model('Task', TaskSchema);