import React, { useState } from "react";
import axios from "axios";
import "./AddAccountModal.css";

const AddAccountModal = ({ isOpen, onClose, userId }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const accountData = {
      cardNumber,
      cardName,
      expiryDate,
      cvv,
      amount,
      userId, // Associate the account with the current user
    };

    try {
      const response = await axios.post("http://localhost:9000/accounts/add", accountData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setMessage("Account added successfully!");
      // Clear the form
      setCardNumber("");
      setCardName("");
      setExpiryDate("");
      setCvv("");
      setAmount("");
    } catch (error) {
      setMessage("Error adding account. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Add Account</h2>
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="card-image">
          <div className="card-placeholder">
            <div className="card-icon">💳</div>
            <p className="card-text">YOUR NAME HERE</p>
            <p className="card-date">MM/YY</p>
          </div>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="  Card Number"
            className="input-field"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="  Card Name"
            className="input-field"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="  Expiry Date (MM/YY)"
            className="input-field"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="  CVV"
            className="input-field"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="  Amount"
            className="input-field"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <button type="submit" className="submit-btn">Submit</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default AddAccountModal;
