import { useEffect, useState } from "react";

type User = { id: number; name: string };

// 🔒 Hardcoded backend URL for now (so no env var issues)
const API = "https://deploy-test-1-we0q.onrender.com";

export default function App() {
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Test root
    fetch(`${API}/`)
      .then((r) => r.json())
      .then((d) => setMessage(d.message))
      .catch(() => setMessage("⚠️ backend not reachable"));

    // Test /users
    fetch(`${API}/users`)
      .then((r) => r.json())
      .then(setUsers)
      .catch(() => setUsers([]));
  }, []);

  return (
    <div style={{ fontFamily: "system-ui", padding: 24 }}>
      <h1>Frontend is working ✅</h1>

      {/* Debug: show the backend being used */}
      <p><b>Backend URL:</b> {API}</p>

      <p><b>Backend says:</b> {message}</p>

      <h2>Users</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}
