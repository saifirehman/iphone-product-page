import React, { useState } from "react";
import "./ProductDetails.css";

const ProductDetails = () => {
  const [condition, setCondition] = useState("Good");
  const [capacity, setCapacity] = useState("128GB");
  const [color, setColor] = useState("Space Black");

  return (
    <div className="product-details">
      <div className="image-container">
        <img
          src="/assets/Images/image1.png"
          alt="iPhone 14 Pro"
          className="main-image"
        />
      </div>
      <div className="options-container">
        <div className="product-option">
          <label>Condition: Good</label>
          <div className="condition-buttons">
            <button
              className={condition === "Good" ? "selected" : ""}
              onClick={() => setCondition("Good")}
            >
              Good
            </button>
            <button
              className={condition === "Great" ? "selected" : ""}
              onClick={() => setCondition("Great")}
            >
              Great
            </button>
            <button
              className={condition === "Pristine" ? "selected" : ""}
              onClick={() => setCondition("Pristine")}
            >
              Pristine
            </button>
          </div>
        </div>
        <div className="product-option">
          <label>Capacity: 128GB</label>
          <div className="capacity-buttons">
            <button
              className={capacity === "128GB" ? "selected" : ""}
              onClick={() => setCapacity("128GB")}
            >
              128GB
            </button>
            <button
              className={capacity === "256GB" ? "selected" : ""}
              onClick={() => setCapacity("256GB")}
            >
              256GB
            </button>
            <button
              className={capacity === "512GB" ? "selected" : ""}
              onClick={() => setCapacity("512GB")}
            >
              512GB
            </button>
          </div>
        </div>
        <div className="product-option">
          <label>Color:</label>
          <div className="color-options">
            <button
              className={`color-btn space-black ${
                color === "Space Black" ? "selected" : ""
              }`}
              onClick={() => setColor("Space Black")}
            ></button>
            <button
              className={`color-btn deep-purple ${
                color === "Deep Purple" ? "selected" : ""
              }`}
              onClick={() => setColor("Deep Purple")}
            ></button>
            <button
              className={`color-btn gold ${color === "Gold" ? "selected" : ""}`}
              onClick={() => setColor("Gold")}
            ></button>
            <button
              className={`color-btn silver ${
                color === "Silver" ? "selected" : ""
              }`}
              onClick={() => setColor("Silver")}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
