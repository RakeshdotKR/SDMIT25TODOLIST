
import { useState } from 'react';

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('General');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (!text.trim()) return; // Do not add empty todo
    onAdd(text, category);    // Call parent callback
    setText('');              // Clear input
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>General</option>
        <option>Work</option>
        <option>Personal</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
}
