import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Styles.css";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:9000/log", null, {
        params: { username, password },
      });

      if (response.data === "You have logged in successfully.") {
        navigate("/dashboard", { state: { username } });
      } else {
        setError(response.data);
      }
    } catch (error) {
      setError("Login failed. Please check your credentials and try again.");
    }
  };

  const handleSignUp = () => {
    navigate("/register");
  };

  return (
    <div className="auth-container">
      <div className="signup-container">
        <h2>Sign In</h2>
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
        {error && <p className="error-message">{error}</p>}
        <button className="signup-btn" onClick={handleLogin}>
          SIGN IN
        </button>
      </div>
      <div className="signin-container">
        <h2>Hello...!</h2>
        <p>Enter your personal details and start your journey with us</p>
        <button className="signin-btn" onClick={handleSignUp}>
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default Login;
