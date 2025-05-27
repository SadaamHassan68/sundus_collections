import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import './Profile.css';

const Profile = () => {
  const { isLoggedIn } = useShop();
  const [activeTab, setActiveTab] = useState('account');
  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    email: 'john@example.com',
    phone: '+1234567890',
    address: '123 Main St, City, Country'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement profile update logic
    console.log('Profile updated:', formData);
  };

  if (!isLoggedIn) {
    return (
      <div className="profile-container">
        <div className="profile-login-required">
          <i className="fas fa-user-lock"></i>
          <h2>Please Log In</h2>
          <p>You need to be logged in to view your profile.</p>
          <button className="login-button">Log In</button>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-sidebar">
        <div className="profile-user-info">
          <div className="profile-avatar">
            <i className="fas fa-user"></i>
          </div>
          <h3>{formData.fullName}</h3>
          <p>{formData.email}</p>
        </div>
        <nav className="profile-nav">
          <button 
            className={activeTab === 'account' ? 'active' : ''} 
            onClick={() => setActiveTab('account')}
          >
            <i className="fas fa-user-circle"></i>
            Account Information
          </button>
          <button 
            className={activeTab === 'orders' ? 'active' : ''} 
            onClick={() => setActiveTab('orders')}
          >
            <i className="fas fa-shopping-bag"></i>
            Order History
          </button>
          <button 
            className={activeTab === 'address' ? 'active' : ''} 
            onClick={() => setActiveTab('address')}
          >
            <i className="fas fa-map-marker-alt"></i>
            Addresses
          </button>
          <button 
            className={activeTab === 'payment' ? 'active' : ''} 
            onClick={() => setActiveTab('payment')}
          >
            <i className="fas fa-credit-card"></i>
            Payment Methods
          </button>
        </nav>
      </div>

      <div className="profile-content">
        {activeTab === 'account' && (
          <div className="profile-section">
            <h2>Account Information</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit" className="save-button">
                <i className="fas fa-save"></i>
                Save Changes
              </button>
            </form>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="profile-section">
            <h2>Order History</h2>
            <div className="orders-list">
              {/* Sample order - replace with actual orders */}
              <div className="order-item">
                <div className="order-header">
                  <div>
                    <h4>Order #12345</h4>
                    <p>Placed on March 15, 2024</p>
                  </div>
                  <span className="order-status">Delivered</span>
                </div>
                <div className="order-products">
                  <div className="order-product">
                    <img src="/path/to/product-image.jpg" alt="Product" />
                    <div className="product-info">
                      <h5>Product Name</h5>
                      <p>Quantity: 1</p>
                      <p>Price: $99.99</p>
                    </div>
                  </div>
                </div>
                <div className="order-footer">
                  <span className="order-total">Total: $99.99</span>
                  <button className="view-order-button">View Details</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'address' && (
          <div className="profile-section">
            <h2>Saved Addresses</h2>
            <div className="addresses-list">
              <div className="address-card">
                <div className="address-content">
                  <h4>Home Address</h4>
                  <p>{formData.address}</p>
                </div>
                <div className="address-actions">
                  <button className="edit-button">
                    <i className="fas fa-edit"></i>
                  </button>
                  <button className="delete-button">
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>
              <button className="add-address-button">
                <i className="fas fa-plus"></i>
                Add New Address
              </button>
            </div>
          </div>
        )}

        {activeTab === 'payment' && (
          <div className="profile-section">
            <h2>Payment Methods</h2>
            <div className="payment-methods">
              <div className="payment-card">
                <div className="card-icon">
                  <i className="fab fa-cc-visa"></i>
                </div>
                <div className="card-info">
                  <h4>Visa ending in 4242</h4>
                  <p>Expires 12/25</p>
                </div>
                <button className="delete-button">
                  <i className="fas fa-trash"></i>
                </button>
              </div>
              <button className="add-payment-button">
                <i className="fas fa-plus"></i>
                Add New Payment Method
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile; 