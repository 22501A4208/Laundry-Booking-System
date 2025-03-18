import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user session data
    localStorage.removeItem("token");
    localStorage.removeItem("email");

    // Redirect to login page after logout
    navigate("/login");
  }, [navigate]);

  return null; // No UI needed, just a redirect
};

export default Logout;
