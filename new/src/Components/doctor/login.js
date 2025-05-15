import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './login.css';

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/login", { email, password });
      alert(res.data.message);
      localStorage.setItem("token", res.data.token);
      // localStorage.setItem("userId", res.data.users._id);
      localStorage.setItem("userId", res.data.user._id);

      
      // ✅ Update authentication state
      setIsAuthenticated(true);

      // ✅ Redirect to home page
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <header>
      <div className="login">
        <div className="log-form">
          <h2>Login</h2>
          <p>Please log in to book an appointment</p>
          <form onSubmit={handleSubmit}>
            <div>
              <p>Email</p>
              <input
                className="log-fill"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div> 
              <p>Password</p>
              <input
                className="log-fill"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
            <p>Create a new account? <Link to="/create">Click here</Link></p>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Login;
