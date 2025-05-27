import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import './Home.css';

const Home = () => {
  const { addToCart } = useShop();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [email, setEmail] = useState('');
  const [showNewsletterSuccess, setShowNewsletterSuccess] = useState(false);

  // Mock featured products data
  const featuredProducts = [
    {
      id: 1,
      name: 'Summer Collection Dress',
      price: 89.99,
      image: 'https://images.asos-media.com/products/asos-design-linen-look-twist-strap-bias-maxi-dress-in-oatmeal/207563355-1-oatmeal?$n_960w$&wid=952&fit=constrain',
      category: 'Dresses',
      description: 'A beautiful summer dress perfect for any occasion. Made with high-quality fabric for maximum comfort.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['White', 'Blue', 'Pink']
    },
    {
      id: 2,
      name: 'Casual Denim Jacket',
      price: 129.99,
      image: 'https://images.asos-media.com/products/asos-design-co-ord-denim-gilet-with-patch-pockets-in-washed-black/208750897-1-washedblack?$n_960w$&wid=952&fit=constrain',
      category: 'Jackets',
      description: 'Classic denim jacket that never goes out of style. Perfect for layering in any season.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Blue', 'Black', 'Light Blue']
    },
    {
      id: 3,
      name: 'Elegant Evening Gown',
      price: 199.99,
      image: 'https://images.asos-media.com/products/asos-design-long-sleeve-satin-maxi-dress-with-full-skirt-and-godet-in-lemon-yellow/208182226-2?$n_480w$&wid=476&fit=constrain',
      category: 'Dresses',
      description: 'Stunning evening gown for special occasions. Features elegant design and premium materials.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Red', 'Navy']
    },
    {
      id: 4,
      name: 'Designer Handbag',
      price: 159.99,
      image: 'https://images.selfridges.com/is/image/selfridges/R04373133_GOLDSILVER_M?wid=392&hei=522&fmt=webp&qlt=80,1&bgc=F6F6F6&dpr=on,2&extend=-18,0,-18,0',
      category: 'Accessories',
      description: 'Luxurious designer handbag with multiple compartments. Perfect for both casual and formal events.',
      sizes: ['One Size'],
      colors: ['Brown', 'Black', 'Beige']
    }
  ];

  // Mock categories data
  const categories = [
    {
      id: 1,
      name: 'Women\'s Collection',
      image: 'https://media.johnlewiscontent.com/i/JohnLewis/009475978?fmt=auto&$background-off-white$&wid=330&hei=440',
      count: 45
    },
    {
      id: 2,
      name: 'Men\'s Collection',
      image: 'https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/3_4Ratio/Search/Lge/AT2276.jpg?im=Resize,width=450',
      count: 32
    },
    {
      id: 3,
      name: 'Children\'s Collection',
      image: 'https://www.monsoon.co.uk/on/demandware.static/-/Library-Sites-monsoon-content-global/default/dw29316a92/clp/kids/2025/may/21052025_UK/1920-p1.webp',
      count: 28
    },
    {
      id: 4,
      name: 'Accessories',
      image: 'data:image/jpeg;base64,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',
      count: 24
    }
  ];

  const handleQuickView = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    setShowNewsletterSuccess(true);
    setEmail('');
    setTimeout(() => setShowNewsletterSuccess(false), 3000);
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Your Style</h1>
          <p>Explore our latest collection of trendy fashion items</p>
          <Link to="/products" className="shop-now-btn">Shop Now</Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="categories-grid">
          {categories.map(category => (
            <Link to={`/category/${category.name.toLowerCase()}`} key={category.id} className="category-card">
              <div className="category-image">
                <img src={category.image} alt={category.name} />
              </div>
              <div className="category-info">
                <h3>{category.name}</h3>
                <p>{category.count} Products</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="products-grid">
          {featuredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-actions">
                  <button onClick={() => addToCart(product)} className="add-to-cart">
                    <i className="fas fa-shopping-cart"></i>
                  </button>
                  <button onClick={() => handleQuickView(product)} className="quick-view">
                    <i className="fas fa-eye"></i>
                  </button>
                </div>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="category">{product.category}</p>
                <p className="price">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="promo-banner">
        <div className="promo-content">
          <h2>Special Offer</h2>
          <p>Get 20% off on your first purchase</p>
          <Link to="/products" className="promo-btn">Shop Now</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <i className="fas fa-truck"></i>
          <h3>Free Shipping</h3>
          <p>On orders over $100</p>
        </div>
        <div className="feature">
          <i className="fas fa-undo"></i>
          <h3>Easy Returns</h3>
          <p>30 days return policy</p>
        </div>
        <div className="feature">
          <i className="fas fa-lock"></i>
          <h3>Secure Payment</h3>
          <p>100% secure checkout</p>
        </div>
        <div className="feature">
          <i className="fas fa-headset"></i>
          <h3>24/7 Support</h3>
          <p>Dedicated support team</p>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="newsletter-content">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Get the latest updates on new products and special offers</p>
          <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
            <div className="form-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
              <button type="submit">Subscribe</button>
            </div>
            {showNewsletterSuccess && (
              <div className="success-message">
                Thank you for subscribing!
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Quick View Modal */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>
              <i className="fas fa-times"></i>
            </button>
            <div className="modal-body">
              <div className="modal-image">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>
              <div className="modal-info">
                <h2>{selectedProduct.name}</h2>
                <p className="modal-category">{selectedProduct.category}</p>
                <p className="modal-price">${selectedProduct.price.toFixed(2)}</p>
                <p className="modal-description">{selectedProduct.description}</p>
                
                <div className="modal-options">
                  <div className="size-options">
                    <h4>Size</h4>
                    <div className="size-buttons">
                      {selectedProduct.sizes.map(size => (
                        <button key={size} className="size-button">{size}</button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="color-options">
                    <h4>Color</h4>
                    <div className="color-buttons">
                      {selectedProduct.colors.map(color => (
                        <button key={color} className="color-button" style={{ backgroundColor: color.toLowerCase() }}></button>
                      ))}
                    </div>
                  </div>
                </div>

                <button 
                  className="modal-add-to-cart"
                  onClick={() => {
                    addToCart(selectedProduct);
                    handleCloseModal();
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home; 