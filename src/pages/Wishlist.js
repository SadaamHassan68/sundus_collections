import React from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import './Wishlist.css';

const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToCart } = useShop();

  if (wishlist.length === 0) {
    return (
      <div className="wishlist-empty">
        <i className="fas fa-heart"></i>
        <h2>Your Wishlist is Empty</h2>
        <p>Save items you like to your wishlist to view them later</p>
        <Link to="/products" className="continue-shopping">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="wishlist-container">
      <h1>My Wishlist</h1>
      <div className="wishlist-grid">
        {wishlist.map(item => (
          <div key={item.id} className="wishlist-item">
            <div className="wishlist-item-image">
              <img src={item.image} alt={item.name} />
              <button
                className="remove-wishlist"
                onClick={() => removeFromWishlist(item.id)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="wishlist-item-details">
              <h3>{item.name}</h3>
              <p className="price">${item.price}</p>
              <div className="wishlist-item-actions">
                <button
                  className="add-to-cart"
                  onClick={() => addToCart(item)}
                >
                  <i className="fas fa-shopping-cart"></i>
                  Add to Cart
                </button>
                <Link to={`/product/${item.id}`} className="view-details">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist; 