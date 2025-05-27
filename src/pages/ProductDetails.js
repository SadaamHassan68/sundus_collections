import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  // This would typically come from an API or database
  const product = {
    id: parseInt(id),
    name: "Children's Summer Dress",
    price: 25.99,
    category: "Children's Clothing",
    image: "https://via.placeholder.com/400",
    description: "Beautiful summer dress for children, made with high-quality cotton material. Perfect for hot summer days.",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
    colors: ["Pink", "Blue", "Yellow", "White"],
    features: [
      "100% Cotton",
      "Machine washable",
      "Comfortable fit",
      "Breathable material"
    ]
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    // Add to cart logic here
    alert(`Added ${quantity} ${product.name}(s) to cart!`);
  };

  return (
    <div className="product-details">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back to Products
      </button>

      <div className="product-details-content">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="price">${product.price}</p>
          <p className="category">{product.category}</p>
          
          <div className="description">
            <h2>Description</h2>
            <p>{product.description}</p>
          </div>

          <div className="sizes">
            <h3>Available Sizes</h3>
            <div className="size-options">
              {product.sizes.map(size => (
                <button key={size} className="size-button">
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="colors">
            <h3>Available Colors</h3>
            <div className="color-options">
              {product.colors.map(color => (
                <button 
                  key={color} 
                  className="color-button"
                  style={{ backgroundColor: color.toLowerCase() }}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className="features">
            <h3>Features</h3>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="add-to-cart-section">
            <div className="quantity-selector">
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
              />
            </div>
            <button className="add-to-cart-button" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails; 