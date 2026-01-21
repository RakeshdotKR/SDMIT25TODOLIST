
export default function TodoItem({
  todo,
  isEditing,
  editedText,
  onStartEdit,
  onCancelEdit,
  onChangeEdit,
  onSubmitEdit,
  onToggle,
  onDelete
}) {
  if (isEditing) {
    return (
      <li>
        <input
          type="text"
          value={editedText}
          onChange={onChangeEdit}
        />
        <button onClick={onSubmitEdit}>Save</button>
        <button onClick={onCancelEdit}>Cancel</button>
      </li>
    );
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo._id)}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        [{todo.category}] {todo.text}
      </span>
      <button onClick={onStartEdit}>Edit</button>
      <button onClick={() => onDelete(todo._id)}>Delete</button>
    </li>
  );
}
