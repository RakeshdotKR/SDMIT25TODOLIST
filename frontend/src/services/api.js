
const API_URL = '/api/todos';

/**
 * Fetch all todos, optionally filtered by category.
 */
export async function fetchTodos(category) {
  const url = category ? `${API_URL}?category=${category}` : API_URL;
  const response = await fetch(url);
  return response.json();
}

/**
 * Create a new todo item.
 */
export async function createTodo(text, category) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text, category })
  });
  return response.json();
}

/**
 * Toggle completion status of a todo.
 */
export async function toggleTodo(id) {
  const response = await fetch(`${API_URL}/${id}`, { method: 'PUT' });
  return response.json();
}

/**
 * Delete a todo.
 */
export async function deleteTodo(id) {
  const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  return response.json();
}

export async function editTodo(id, text) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text })
  });
  return response.json();
}