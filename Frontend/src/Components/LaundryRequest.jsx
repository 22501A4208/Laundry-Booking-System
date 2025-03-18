import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./LaundryRequest.css"; // Import the CSS file

const LaundryRequest = () => {
  const [formData, setFormData] = useState({
    topwear: 0,
    bottomwear: 0,
    woolen: 0,
    kidswear: 0,
    phone: "",
    pickupdate: "",
    time: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (!storedToken) {
      toast.error("You need to log in first!");
      navigate("/login");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: e.target.type === "number" ? parseInt(value) || "" : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const storedToken = localStorage.getItem("token");
    const name = localStorage.getItem("email");

    if (!storedToken) {
      toast.error("You need to log in first!");
      navigate("/login");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5001/api/laundry-request",
        { name, ...formData },
        { headers: { Authorization: `Bearer ${storedToken}` } }
      );

      toast.success(response.data.message);
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to submit request");
    }
  };

  return (
    <div className="container">
      <div className="request-card">
        <h2 className="card-title">🧺 Laundry Request</h2>

        {/* Clothing Items & Contact Section */}
        <div className="request-content">
          <div className="clothing-section">
            <h3 className="section-title">Clothing Items</h3>
            <div className="clothing-grid">
              {["topwear", "bottomwear", "woolen", "kidswear"].map((item) => (
                <div key={item} className="clothing-item">
                  <label>{item.charAt(0).toUpperCase() + item.slice(1)}</label>
                  <input
                    type="number"
                    name={item}
                    value={formData[item]}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="pickup-details">
            <h3 className="section-title">Pickup Details</h3>
            <div className="pickup-inputs">
              <div className="input-group">
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>
              <div className="input-group">
                <label>Pickup Date</label>
                <input
                  type="date"
                  name="pickupdate"
                  value={formData.pickupdate}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>
              <div className="input-group">
                <label>Pickup Time</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button onClick={handleSubmit} className="submit-button">
          ✅ Submit Request
        </button>
      </div>
    </div>
  );
};

export default LaundryRequest;
