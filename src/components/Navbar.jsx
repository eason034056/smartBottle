import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "../Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Smart Bottle</div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/">Concept Video</Link>
        </li>
        <li>
          <Link to="/">Prototype</Link>
        </li>
        <li>
          <Link to="/documents">Documentation</Link>
        </li>
        <li>
          <Link to="/team">Team</Link>
        </li>
      </ul>
      <button className="menu-btn" onClick={toggleMenu}>
        <MenuIcon />
      </button>
    </nav>
  );
}

export default Navbar;
