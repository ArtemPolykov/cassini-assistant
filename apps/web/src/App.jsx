import { useState } from "react";

export default function App() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    alert(`Login: ${user}`);
  };

  return (
    <div style={styles.wrap}>
      <form style={styles.card} onSubmit={onSubmit}>
        <h2>Cassini Assistant</h2>

        <input
          style={styles.input}
          placeholder="Username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />

        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <button style={styles.btn}>Sign in</button>
      </form>
    </div>
  );
}

const styles = {
  wrap: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#0f172a",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "24px",
    background: "#1e293b",
    borderRadius: "12px",
    color: "white",
    width: "300px",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #334155",
    background: "#0f172a",
    color: "white",
  },
  btn: {
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    background: "#3b82f6",
    color: "white",
    cursor: "pointer",
  },
};
