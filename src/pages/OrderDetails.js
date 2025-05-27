import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import './OrderDetails.css';

const OrderDetails = () => {
  const { orderId } = useParams();
  const { isLoggedIn } = useShop();

  // Mock order data - replace with actual data from backend
  const order = {
    id: orderId,
    date: 'March 15, 2024',
    status: 'Delivered',
    trackingNumber: 'TRK123456789',
    items: [
      {
        id: 1,
        name: 'Classic White T-Shirt',
        price: 29.99,
        quantity: 2,
        image: '/path/to/tshirt-image.jpg',
        size: 'M',
        color: 'White'
      },
      {
        id: 2,
        name: 'Slim Fit Jeans',
        price: 79.99,
        quantity: 1,
        image: '/path/to/jeans-image.jpg',
        size: '32',
        color: 'Blue'
      }
    ],
    shippingAddress: {
      name: 'John Doe',
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'USA'
    },
    paymentMethod: {
      type: 'Visa',
      last4: '4242',
      expiryDate: '12/25'
    },
    subtotal: 139.97,
    shipping: 5.99,
    tax: 14.60,
    total: 160.56
  };

  if (!isLoggedIn) {
    return (
      <div className="order-details-container">
        <div className="order-login-required">
          <i className="fas fa-user-lock"></i>
          <h2>Please Log In</h2>
          <p>You need to be logged in to view order details.</p>
          <Link to="/login" className="login-button">Log In</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="order-details-container">
      <div className="order-header">
        <Link to="/profile?tab=orders" className="back-link">
          <i className="fas fa-arrow-left"></i>
          Back to Orders
        </Link>
        <h1>Order #{order.id}</h1>
        <p className="order-date">Placed on {order.date}</p>
      </div>

      <div className="order-status-section">
        <div className="status-timeline">
          <div className="status-step completed">
            <i className="fas fa-check-circle"></i>
            <span>Order Placed</span>
          </div>
          <div className="status-step completed">
            <i className="fas fa-check-circle"></i>
            <span>Confirmed</span>
          </div>
          <div className="status-step completed">
            <i className="fas fa-check-circle"></i>
            <span>Shipped</span>
          </div>
          <div className="status-step completed">
            <i className="fas fa-check-circle"></i>
            <span>Delivered</span>
          </div>
        </div>
        <div className="tracking-info">
          <h3>Tracking Information</h3>
          <p>Tracking Number: {order.trackingNumber}</p>
          <button className="track-button">
            <i className="fas fa-truck"></i>
            Track Package
          </button>
        </div>
      </div>

      <div className="order-content">
        <div className="order-items">
          <h2>Order Items</h2>
          {order.items.map(item => (
            <div key={item.id} className="order-item">
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p className="item-variants">Size: {item.size} | Color: {item.color}</p>
                <p className="item-quantity">Quantity: {item.quantity}</p>
                <p className="item-price">${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="order-summary">
          <div className="summary-section">
            <h3>Shipping Address</h3>
            <p>{order.shippingAddress.name}</p>
            <p>{order.shippingAddress.street}</p>
            <p>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}</p>
            <p>{order.shippingAddress.country}</p>
          </div>

          <div className="summary-section">
            <h3>Payment Method</h3>
            <div className="payment-info">
              <i className="fab fa-cc-visa"></i>
              <span>{order.paymentMethod.type} ending in {order.paymentMethod.last4}</span>
              <span>Expires {order.paymentMethod.expiryDate}</span>
            </div>
          </div>

          <div className="summary-section">
            <h3>Order Summary</h3>
            <div className="price-breakdown">
              <div className="price-row">
                <span>Subtotal</span>
                <span>${order.subtotal.toFixed(2)}</span>
              </div>
              <div className="price-row">
                <span>Shipping</span>
                <span>${order.shipping.toFixed(2)}</span>
              </div>
              <div className="price-row">
                <span>Tax</span>
                <span>${order.tax.toFixed(2)}</span>
              </div>
              <div className="price-row total">
                <span>Total</span>
                <span>${order.total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="order-actions">
            <button className="print-invoice">
              <i className="fas fa-print"></i>
              Print Invoice
            </button>
            <button className="contact-support">
              <i className="fas fa-headset"></i>
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails; 