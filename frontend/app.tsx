import { useEffect, useState } from "react";

type User = { id: number; name: string };

// Read from env, fallback to your Render URL, and strip trailing slashes
const RAW_API =
  (import.meta.env.VITE_API_BASE_URL as string | undefined) ??
  "https://deploy-test-1-we0q.onrender.com";
const API = RAW_API.replace(/\/+$/, "");

export default function App() {
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch(`${API}/`)
      .then((r) => r.json())
      .then((d) => setMessage(d.message))
      .catch(() => setMessage("⚠️ backend not reachable"));

    fetch(`${API}/users`)
      .then((r) => r.json())
      .then(setUsers)
      .catch(() => setUsers([]));
  }, []);

  return (
    <div style={{ fontFamily: "system-ui", padding: 16 }}>
      <h1>Frontend is working ✅</h1>
      <p>
        <b>Backend says:</b> {message}
      </p>
      <h2>Users</h2>
      <ul>{users.map((u) => <li key={u.id}>{u.name}</li>)}</ul>
    </div>
  );
}
