import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Styles.css";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignIn = () => {
    navigate("/");
  };

  const handleSignUp = async () => {
    const userData = { username, password };

    try {
      const response = await axios.post("http://localhost:9000/save", userData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setMessage("Registration successful! You can now log in.");
    } catch (error) {
      if (error.response && error.response.data) {
        setMessage(error.response.data || "Registration failed. Please try again.");
      } else {
        setMessage("An error occurred. Please try again later.");
      }
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="auth-container">
      <div className="signin-container">
        <h2>Welcome Back!</h2>
        <p>To keep connected with us please log in with your personal info</p>
        <button className="signin-btn" onClick={handleSignIn}>SIGN IN</button>
      </div>
      <div className="signup-container">
        <h2>Create Account</h2>
        <input
          type="text"
          placeholder="Username"
          className="input-field"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {message && <p className="message">{message}</p>}
        <button className="signup-btn" onClick={handleSignUp}>SIGN UP</button>
      </div>
    </div>
  );
};

export default Register;
