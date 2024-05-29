import React, { useState } from "react";

const Login = ({ setPage }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!username) {
      alert("Username is Required");
      return;
    } else if (!password) {
      alert("Password is required");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      setPage("home");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="main">
      <h1>Shopping Cart</h1>
      <div className="Login">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="Input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="Input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="Button" onClick={handleLogin}>
          Login
        </button>
        <button className="switch" onClick={() => setPage("register")}>
          Don't have a Account? Register
        </button>
      </div>
    </div>
  );
};

export default Login;
