
const Todo = require('../models/Todo');

exports.getTodos = async (req, res, next) => {
  try {
    const filter = req.query.category ? { category: req.query.category } : {};
    const todos = await Todo.find(filter).sort({ createdAt: -1 });
    res.json(todos);
  } catch (err) {
    next(err);
  }
};

exports.createTodo = async (req, res, next) => {
  try {
    const { text, category } = req.body;
    const todo = new Todo({ text, category });
    const created = await todo.save();
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
};

exports.updateTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ message: 'Not found' });
    todo.completed = !todo.completed;
    const updated = await todo.save();
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

// Replace the old deleteTodo method with this:
exports.deleteTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    
    // Use deleteOne() instead of remove()
    await Todo.deleteOne({ _id: req.params.id });
    // OR alternatively: await todo.deleteOne();
    
    res.json({ message: 'Todo removed' });
  } catch (error) {
    console.error('Delete error:', error); // Add logging
    next(error);
  }
};

exports.editTodo = async (req, res, next) => {
  try {
    const { text } = req.body;
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      res.status(404);
      throw new Error('Todo not found');
    }
    todo.text = text;
    const updated = await todo.save();
    res.json(updated);
  } catch (error) {
    next(error);
  }
};