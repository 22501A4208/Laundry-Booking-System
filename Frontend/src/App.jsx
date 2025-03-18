import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import LaundryRequest from "./Components/LaundryRequest";
import Navbar from "./Components/Navbar"; // ✅ Import Navbar

function App() {
  return (
    <Router>
      <ToastContainer position="top-center" autoClose={3000} />
      <Navbar /> {/* ✅ Add Navbar here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/laundry-request" element={<LaundryRequest />} />
      </Routes>
    </Router>
  );
}

export default App;
