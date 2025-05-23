const Price = ({ className }) => {
  return (
    <div className={`price-container container${className || ''}`}>
      <h2 className="price-title">PRICE</h2>
      
      <div className="price-grid">
        {/* Budget Option */}
        <div className="price-option">
          <p className="price-description">
            Budget-friendly options with great performance. Find Laptops Under
          </p>
          <p className="price-value">₹20,000</p>
          <button 
            className="shop-button"
          >
            SHOP NOW
          </button>
        </div>
        
        {/* Mid-range Option */}
        <div className="price-option">
          <p className="price-description">
            Perfect balance of affordability and power. Find Laptops Under
          </p>
          <p className="price-value">₹30,000</p>
          <button 
            className="shop-button"
          >
            SHOP NOW
          </button>
        </div>
        
        {/* High-end Option */}
        <div className="price-option">
          <p className="price-description">
            High-performance laptops for all your needs. Find Laptops Above
          </p>
          <p className="price-value">₹30,000</p>
          <button 
            className="shop-button"
          >
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Price;