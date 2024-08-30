import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="view-all">
        <span>
          <i class="fa-solid fa-bars"></i>
          {" View All"}
        </span>
      </div>
      <div className="pagination">
        <span>01</span>
        <div className="separator"></div>
        <span>03</span>
      </div>
      <div className="cart-section">
        <span className="cart-icon">&#128722;</span>
        <span className="add-to-cart">ADD TO CART</span>
        <span className="price">$980</span>
      </div>
    </footer>
  );
};

export default Footer;
