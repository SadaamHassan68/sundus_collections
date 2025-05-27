import React from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import './Orders.css';

const Orders = () => {
  const { isLoggedIn } = useShop();

  // Mock orders data - replace with actual data from backend
  const orders = [
    {
      id: '12345',
      date: 'March 15, 2024',
      status: 'Delivered',
      total: 160.56,
      items: [
        {
          id: 1,
          name: 'Classic White T-Shirt',
          image: '/path/to/tshirt-image.jpg',
          quantity: 2
        },
        {
          id: 2,
          name: 'Slim Fit Jeans',
          image: '/path/to/jeans-image.jpg',
          quantity: 1
        }
      ]
    },
    {
      id: '12344',
      date: 'March 10, 2024',
      status: 'Shipped',
      total: 89.99,
      items: [
        {
          id: 3,
          name: 'Summer Dress',
          image: '/path/to/dress-image.jpg',
          quantity: 1
        }
      ]
    }
  ];

  if (!isLoggedIn) {
    return (
      <div className="orders-container">
        <div className="orders-login-required">
          <i className="fas fa-user-lock"></i>
          <h2>Please Log In</h2>
          <p>You need to be logged in to view your orders.</p>
          <Link to="/login" className="login-button">Log In</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="orders-container">
      <h1>My Orders</h1>
      
      {orders.length === 0 ? (
        <div className="orders-empty">
          <i className="fas fa-shopping-bag"></i>
          <h2>No Orders Yet</h2>
          <p>Start shopping to see your orders here</p>
          <Link to="/products" className="continue-shopping">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="orders-list">
          {orders.map(order => (
            <div key={order.id} className="order-card">
              <div className="order-header">
                <div>
                  <h3>Order #{order.id}</h3>
                  <p className="order-date">Placed on {order.date}</p>
                </div>
                <span className={`order-status ${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </div>

              <div className="order-items">
                {order.items.map(item => (
                  <div key={item.id} className="order-item">
                    <img src={item.image} alt={item.name} />
                    <div className="item-info">
                      <h4>{item.name}</h4>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="order-footer">
                <span className="order-total">Total: ${order.total.toFixed(2)}</span>
                <Link to={`/order/${order.id}`} className="view-order-button">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders; 