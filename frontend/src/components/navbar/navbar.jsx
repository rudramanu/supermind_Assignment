import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
const name = localStorage.getItem("name") || "Login";
const Navbar = () => {
  return (
    <nav style={navStyle}>
      <div style={brandStyle}>
        <span style={brandNameStyle}>My Blog</span>
      </div>
      <div style={navLinksStyle}>
        <NavLink to="/" style={linkStyle}>
          Home
        </NavLink>
        <NavLink to="/login" style={linkStyle}>
          {name}
        </NavLink>
        <NavLink to="/signup" style={linkStyle}>
          Signup
        </NavLink>
        <NavLink to="/blogs" style={linkStyle}>
          Blogs
        </NavLink>
      </div>
    </nav>
  );
};

// CSS styles (inline for simplicity)
const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "teal",
  color: "white",
  padding: "30px 30px",
};

const brandStyle = {
  display: "flex",
  alignItems: "center",
  fontSize: "25px",
};

const logoStyle = {
  height: "30px",
  marginRight: "10px",
};

const brandNameStyle = {
  fontWeight: "bold",
};

const navLinksStyle = {
  display: "flex",
  width: "40%",
  justifyContent: "space-between",
  fontSize: "25px",
  fontWeight: "550",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  margin: "0 10px",
};
export default Navbar;
