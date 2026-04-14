import { useState } from "react";

export default function GoalCard({ goal }) {
  const [progress, setProgress] = useState(goal.progress);

  return (
    <div style={{ margin: "10px", padding: "10px", border: "1px solid gray" }}>
      <h3>{goal.title}</h3>
      <p>Progress: {progress}%</p>
      <button onClick={() => setProgress(progress + 10)}>Update</button>
    </div>
  );
}
