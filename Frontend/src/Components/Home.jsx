import { useNavigate } from "react-router-dom";
import "./Home.css";
import laundryLogo from "../assets/laundry-logo.png"; // Import image

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Left Side - Content */}
      <div className="home-content">
        <header className="home-header">Smart Cleaning Services</header>
        <p className="home-description">Hassle-free laundry services at your fingertips</p>

        <div className="home-card">
          <h1 className="home-title">Home</h1>
          <div className="button-container">
            <button onClick={() => navigate("/register")} className="home-button">
              Register
            </button>
            <button onClick={() => navigate("/login")} className="home-button">
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="home-image-container">
        <img src={laundryLogo} alt="Laundry Service" className="home-image" />
      </div>
    </div>
  );
};

export default Home;

