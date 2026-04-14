import { useState } from "react";

export default function AddGoalModal({ onAdd }) {
  const [title, setTitle] = useState("");

  return (
    <div>
      <input onChange={(e) => setTitle(e.target.value)} placeholder="Goal" />
      <button onClick={() => onAdd({ title, progress: 0 })}>Add</button>
    </div>
  );
}
