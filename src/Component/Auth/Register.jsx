import React, { useState } from "react";

const Register = ({ setPage }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (!username) {
      alert("Username is Required");
      return;
    } else if (!password) {
      alert("Password is required");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.filter((user) => user.username === username);
    if (userExists.length > 0) {
      alert("Username already exists");
      return;
    }

    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
    setPage("login");
  };

  return (
    <div className="main">
      <h1>Shopping Cart</h1>
      <div className="Register">
        <h2>Register</h2>
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
        <button className="Button" onClick={handleRegister}>
          Register
        </button>
        <button className="switch" onClick={() => setPage("login")}>
          Have a Account already? LogIn
        </button>
      </div>
    </div>
  );
};

export default Register;
