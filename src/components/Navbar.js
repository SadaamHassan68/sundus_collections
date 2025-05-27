import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This would typically come from your auth context

  const cartItems = [
    { id: 1, name: 'Product 1', price: 99.99, quantity: 1 },
    { id: 2, name: 'Product 2', price: 149.99, quantity: 2 }
  ];

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/logo192.png" alt="" className="logo-img" />
          <span className="logo-text">Sundus</span>
          <span className="logo-highlight">Collection</span>
        </Link>

        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/categories" className="nav-link">Categories</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>

        <div className="navbar-actions">
          <div className="search-bar">
            <input type="text" placeholder="Search products..." />
            <button className="search-button">
              <i className="fas fa-search"></i>
            </button>
          </div>

          <div className="cart-container">
            <button 
              className="cart-button"
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <i className="fas fa-shopping-cart"></i>
              {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
            </button>

            {isCartOpen && (
              <div className="cart-dropdown">
                <div className="cart-items">
                  {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                      <div className="cart-item-details">
                        <h4>{item.name}</h4>
                        <p>${item.price} x {item.quantity}</p>
                      </div>
                      <button className="remove-item">
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                  ))}
                </div>
                <div className="cart-summary">
                  <div className="cart-total">
                    <span>Total:</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <button 
                    className="checkout-button"
                    onClick={() => navigate('/checkout')}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="user-menu-container">
            <button 
              className="user-menu-button"
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            >
              <i className="fas fa-user"></i>
            </button>

            {isUserMenuOpen && (
              <div className="user-dropdown">
                {isLoggedIn ? (
                  <>
                    <Link to="/profile" className="dropdown-item">
                      <i className="fas fa-user-circle"></i>
                      My Profile
                    </Link>
                    <Link to="/orders" className="dropdown-item">
                      <i className="fas fa-box"></i>
                      My Orders
                    </Link>
                    <Link to="/wishlist" className="dropdown-item">
                      <i className="fas fa-heart"></i>
                      Wishlist
                    </Link>
                    <button 
                      className="dropdown-item logout"
                      onClick={() => setIsLoggedIn(false)}
                    >
                      <i className="fas fa-sign-out-alt"></i>
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="dropdown-item">
                      <i className="fas fa-sign-in-alt"></i>
                      Login
                    </Link>
                    <Link to="/signup" className="dropdown-item">
                      <i className="fas fa-user-plus"></i>
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 