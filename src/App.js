import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import Dashboard from "./Components/Dashboard";
import Activated from "./Components/Activated";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dash/*" element={<Dashboard />} />
            <Route path="/activated" element={<Activated />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;