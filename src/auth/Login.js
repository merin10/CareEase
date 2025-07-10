// src/auth/Login.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";

function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState("patient");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      if (role === "patient") {
        navigate("/patient/dashboard");
      } else if (role === "caregiver") {
        navigate("/caregiver/dashboard");
      }
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="auth-container login-bg">
      <div className="auth-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="role-select"
          >
            <option value="patient">Patient</option>
            <option value="caregiver">Caregiver</option>
          </select>
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
