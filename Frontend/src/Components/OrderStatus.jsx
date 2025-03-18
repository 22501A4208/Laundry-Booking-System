import { useState, useEffect } from "react";
import axios from "axios";
import "./OrderStatus.css"; // Import CSS file

const OrderStatus = () => {
  const [status, setStatus] = useState("Fetching...");

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const storedToken = localStorage.getItem("token");
        const response = await axios.get("http://localhost:5001/api/order-status", {
          headers: { Authorization: `Bearer ${storedToken}` },
        });
        setStatus(response.data.status);
      } catch (error) {
        setStatus("No active order found");
      }
    };

    fetchStatus();
  }, []);

  const statusSteps = ["Washing", "Drying", "Ironing", "Ready to Dispatch"];

  return (
    <div className="status-container">
      <h2 className="status-title">📦 Order Status</h2>
      <div className="status-steps">
        {statusSteps.map((step, index) => (
          <div key={index} className={`status-step ${status === step ? "active" : ""}`}>
            <span>{step}</span>
          </div>
        ))}
      </div>
      <p className="status-message">Current Status: {status}</p>
    </div>
  );
};

export default OrderStatus;
