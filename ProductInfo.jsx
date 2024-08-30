import "./ProductInfo.css"; // CSS for styling the component

const ProductCard = () => {
  return (
    <div className="product-container">
      <div className="product-info">
        <div className="product-status">In stock</div>
        <h1 className="product-title">
          Refurbished <br />
          iPhone 14 Pro
        </h1>

        <div className="product-reviews">
          <span className="stars">REVIEWS: 4/5</span>
          <div className="star-icons">
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star greyed-out">★</span>
          </div>
        </div>

        <p className="product-description">
          Bringing you Dynamic Island, access your music while scrolling social
          media. Apple iPhone 14 Pro colours - Deep Purple, Gold, Silver, and
          Space Black.
        </p>

        <div className="product-images">
          <img
            className="thumbnail-image"
            src="/assets/Images/image1.png"
            alt="iPhone 14 Pro thumbnail 1"
          />
          <img
            className="thumbnail-image"
            src="/assets/Images/image2.png"
            alt="iPhone 14 Pro thumbnail 2"
          />
          <img
            className="thumbnail-image"
            src="/assets/Images/image3.png"
            alt="iPhone 14 Pro thumbnail 3"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
