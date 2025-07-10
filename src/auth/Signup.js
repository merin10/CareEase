// src/auth/Signup.js
import React from "react";
import { Link } from "react-router-dom";
import "./auth.css";

function Signup() {
  return (
    <div className="auth-container signup-bg">
      <div className="auth-box">
        <h2>Sign Up</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
