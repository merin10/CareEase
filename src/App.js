// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import PatientDashboard from "./patient/Dashboard";
import CaregiverDashboard from "./caregiver/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/patient/dashboard" element={<PatientDashboard />} />
        <Route path="/caregiver/dashboard" element={<CaregiverDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
