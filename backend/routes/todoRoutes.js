
const express = require('express');
const router = express.Router();
const { getTodos, createTodo, updateTodo, deleteTodo, editTodo } = require('../controllers/todoController');

router.route('/')
  .get(getTodos)
  .post(createTodo);

router.route('/:id')
  .put(updateTodo)
  .patch(editTodo)       // new PATCH route
  .delete(deleteTodo);

module.exports = router;