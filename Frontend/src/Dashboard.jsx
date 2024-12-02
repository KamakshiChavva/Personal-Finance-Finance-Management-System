// Dashboard.js
import React, { useState } from "react";
import AddAccountModal from "./AddAccountModal";
import "./Dashboard.css";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="logo">ClarityUI</div>
        <nav className="nav">
          <ul>
            <li className="nav-item">Dashboard</li>
            <li className="nav-item active">Balances</li>
            <li className="nav-item">Transactions</li>
            <li className="nav-item">Bills</li>
            <li className="nav-item">Expenses</li>
            <li className="nav-item">Goals</li>
          </ul>
        </nav>
        <div className="user-profile">
          <button className="user-button">Jacob Jones</button>
        </div>
      </aside>

      <main className="main-content">
        <header className="header">
          <div className="greeting">
            <h1>Hi, User</h1>
            <p>September 16, 2024</p>
          </div>
          <div className="actions">
            <input type="text" placeholder="Search here or ask me so" className="search-bar" />
            <span className="notification-icon">🔔</span>
          </div>
        </header>

        <div className="add-account-container">
          <button className="add-account-btn" onClick={openModal}>Add Account</button>
        </div>

        <div className="content-area"></div>

        <AddAccountModal isOpen={isModalOpen} onClose={closeModal} />
      </main>
    </div>
  );
};

export default Dashboard;
