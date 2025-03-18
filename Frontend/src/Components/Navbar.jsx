import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current route

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    navigate("/login");
  };

  const isHomePage = location.pathname === "/";
  const isLoginPage = location.pathname === "/login";
  const isLoggedIn = localStorage.getItem("token");

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#333", color: "#fff" }}>
      <div>
        <Link to="/" style={{ color: "#fff", marginRight: "10px" }}>Home</Link>
      </div>
      <div>
        {/* Show Login button only if user is NOT logged in and NOT on the Home or Login page */}
        {!isHomePage && !isLoginPage && !isLoggedIn && (
          <Link to="/login" style={{ color: "#fff" }}>Login</Link>
        )}
        
        {/* Show Logout button only if user is logged in AND not on the Login or Home page */}
        {isLoggedIn && !isHomePage && !isLoginPage && (
          <button onClick={handleLogout} style={{ background: "red", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
