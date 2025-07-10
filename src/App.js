import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./auth/Signup";
import Login from "./auth/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/patient" element={<div>Patient Dashboard</div>} />
        <Route path="/caregiver" element={<div>Caregiver Dashboard</div>} />
      </Routes>
    </Router>
  );
}

export default App;
