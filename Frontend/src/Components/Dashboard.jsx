import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LaundryRequest from "./LaundryRequest";
import OrderStatus from "./OrderStatus";
import "./Dashboard.css";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("pricing");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/logout");
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="sidebar-title">Dashboard</h2>
        <ul className="sidebar-menu">
          <li
            className={`sidebar-item ${activeTab === "pricing" ? "active" : ""}`}
            onClick={() => setActiveTab("pricing")}
          >
            Price Details
          </li>
          <li
            className={`sidebar-item ${activeTab === "laundry" ? "active" : ""}`}
            onClick={() => setActiveTab("laundry")}
          >
            Laundry Request
          </li>
          <li
            className={`sidebar-item ${activeTab === "orderStatus" ? "active" : ""}`}
            onClick={() => setActiveTab("orderStatus")}
          >
            Order Status
          </li>
        </ul>
        
      </div>

      {/* Main Content */}
      <div className="dashboard-content">
        {activeTab === "pricing" && (
          <div className="price-container">
            <h2 className="price-heading">Price Details</h2>
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Price (₹)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Topwear</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>Bottomwear</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>Woolen</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>Pattu</td>
                  <td>200</td>
                </tr>
                <tr>
                  <td>Kids Wear</td>
                  <td>10</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {activeTab === "laundry" && <LaundryRequest />}
        {activeTab === "orderStatus" && <OrderStatus />} {/* Order Status Component */}
      </div>
    </div>
  );
};

export default Dashboard;