import React, { useState } from "react";
import { signup } from "../../api/api";
import "./signup.css";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const user = await signup(name, email, password);
      console.log("Signed up user:", user);
      // Handle successful signup here (e.g., redirect to dashboard)
    } catch (error) {
      console.error("Signup failed:", error.message);
      // Handle signup error (e.g., show error message to the user)
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <input
        className="signup-input"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="signup-input"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="signup-input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="signup-button" onClick={handleSignup}>
        Signup
      </button>
    </div>
  );
};

export default Signup;
