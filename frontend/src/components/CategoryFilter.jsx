
export default function CategoryFilter({ category, onChange }) {
  return (
    <select value={category} onChange={(e) => onChange(e.target.value)}>
      <option value="">All</option>
      <option>General</option>
      <option>Work</option>
      <option>Personal</option>
    </select>
  );
}
