
const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
  text: { type: String, required: true },
  category: { type: String, default: 'General' },
  completed: { type: Boolean, default: false }
}, { timestamps: true });
module.exports = mongoose.model('Todo', todoSchema);