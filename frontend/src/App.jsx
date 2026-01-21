
import { useEffect, useState } from 'react';
import {
  fetchTodos,
  createTodo,
  toggleTodo,
  deleteTodo,
  editTodo
} from './services/api';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import CategoryFilter from './components/CategoryFilter';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [category, setCategory] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editedText, setEditedText] = useState('');

  // Load todos on mount or when category changes
  useEffect(() => {
    loadTodos();
  }, [category]);

  async function loadTodos() {
    const data = await fetchTodos(category);
    setTodos(data);
  }

  function startEdit(todo) {
    setEditingId(todo._id);
    setEditedText(todo.text);
  }

  async function handleEdit(id) {
    const updated = await editTodo(id, editedText);
    setTodos(todos.map(t => (t._id === id ? updated : t)));
    setEditingId(null);
    setEditedText('');
  }

  async function handleAdd(text, cat) {
    const newTodo = await createTodo(text, cat);
    setTodos([newTodo, ...todos]);
  }

  async function handleToggle(id) {
    const updated = await toggleTodo(id);
    setTodos(todos.map(t => (t._id === id ? updated : t)));
  }

  async function handleDelete(id) {
    await deleteTodo(id);
    setTodos(todos.filter(t => t._id !== id));
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <CategoryFilter category={category} onChange={setCategory} />
      <TodoForm onAdd={handleAdd} />
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo._id}
            todo={todo}
            isEditing={editingId === todo._id}
            editedText={editedText}
            onStartEdit={() => startEdit(todo)}
            onCancelEdit={() => setEditingId(null)}
            onChangeEdit={e => setEditedText(e.target.value)}
            onSubmitEdit={() => handleEdit(todo._id)}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}
