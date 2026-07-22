import { useState } from "react";
import { authenticate } from "../services/authService";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (authenticate(username, password)) {
      login();
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <form onSubmit={submit}>
      <h2>Login</h2>
      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button>Login</button>
    </form>
  );
}

export default Login;
