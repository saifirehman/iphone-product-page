import React from "react";
import "./Header.css"; // Path to your CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="menu-icon">
          <i className="fas fa-bars"></i>
        </button>
        <div className="brand">
          <h1 className="logo">
            <img
              src="/assets/Images/logo.png"
              alt="SURGE"
              className="logo-image"
            />
            SURGE
          </h1>
        </div>
        <ul className="navbar-links">
          <li style={{ fontWeight: "bold" }}>PHONES</li>
          <li style={{ fontWeight: "bold" }}>TABLETS</li>
          <li style={{ fontWeight: "bold" }}>LAPTOPS</li>
          <li style={{ fontWeight: "bold" }}>WATCHES</li>
          <li style={{ fontWeight: "bold" }}>DRONES</li>
        </ul>
      </div>
      <div className="navbar-right">
        <div
          style={{
            width: "60%",
            height: "100%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <i className="fa fa-search"></i>
          <i className="far fa-heart"></i>
          <i className="fa fa-shopping-cart"></i>
        </div>
        <i className="far fa-user"></i>
      </div>
    </nav>
  );
};

export default Navbar;
