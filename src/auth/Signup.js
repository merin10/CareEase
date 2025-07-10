import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("patient");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      await set(ref(db, `users/${userCred.user.uid}`), { email, role });
      alert("Signup successful!");
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <h2>Sign Up</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
      <select onChange={(e) => setRole(e.target.value)}>
        <option value="patient">Patient</option>
        <option value="caregiver">Caregiver</option>
      </select>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Signup;
