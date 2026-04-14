import { useState } from "react";
import Dashboard from "./Dashboard";
import Login from "./Login";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <div style={{ background: "#111", minHeight: "100vh", color: "white" }}>
      {user ? (
        <Dashboard />
      ) : (
        <Login onLogin={setUser} />
      )}
    </div>
  );
}
