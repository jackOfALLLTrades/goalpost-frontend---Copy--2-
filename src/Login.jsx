import { useState } from "react";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div style={{ background: "#222", padding: "20px", borderRadius: "10px" }}>
        <h2>Login</h2>
        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={() => onLogin({ email })}>Login</button>
      </div>
    </div>
  );
}
