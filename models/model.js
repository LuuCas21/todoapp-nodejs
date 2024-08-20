const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const todoModel = new mongoose.model('tasks', todoSchema);

module.exports = todoModel;