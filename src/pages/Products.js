import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import './Products.css';

const Products = () => {
  const { addToCart } = useShop();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: 'all',
    color: 'all',
    size: 'all',
    target: 'all'
  });
  const [sortBy, setSortBy] = useState('featured');

  // Mock products data
  const products = [
    {
      id: 1,
      name: 'Summer Collection Dress',
      price: 89.99,
      image: 'https://images.asos-media.com/products/asos-design-linen-look-twist-strap-bias-maxi-dress-in-oatmeal/207563355-1-oatmeal?$n_960w$&wid=952&fit=constrain',
      category: 'Dresses',
      description: 'A beautiful summer dress perfect for any occasion. Made with high-quality fabric for maximum comfort.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['White', 'Blue', 'Pink'],
      isNew: true,
      isSale: false,
      rating: 4.5,
      target: 'women'
    },
    {
      id: 2,
      name: 'Casual Denim Jacket',
      price: 129.99,
      image: 'https://images.asos-media.com/products/asos-design-co-ord-denim-gilet-with-patch-pockets-in-washed-black/208750897-1-washedblack?$n_960w$&wid=952&fit=constrain',
      category: 'Jackets',
      description: 'Classic denim jacket that never goes out of style. Perfect for layering in any season.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Blue', 'Black', 'Light Blue'],
      isNew: false,
      isSale: true,
      rating: 4.8,
      target: 'all'
    },
    {
      id: 3,
      name: 'Elegant Evening Gown',
      price: 199.99,
      image: 'https://images.asos-media.com/products/asos-design-long-sleeve-satin-maxi-dress-with-full-skirt-and-godet-in-lemon-yellow/208182226-2?$n_480w$&wid=476&fit=constrain',
      category: 'Dresses',
      description: 'Stunning evening gown for special occasions. Features elegant design and premium materials.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Red', 'Navy'],
      isNew: true,
      isSale: false,
      rating: 4.9,
      target: 'women'
    },
    {
      id: 4,
      name: 'Designer Handbag',
      price: 159.99,
      image: 'https://images.selfridges.com/is/image/selfridges/R04373133_GOLDSILVER_M?wid=392&hei=522&fmt=webp&qlt=80,1&bgc=F6F6F6&dpr=on,2&extend=-18,0,-18,0',
      category: 'Accessories',
      description: 'Luxurious designer handbag with multiple compartments. Perfect for both casual and formal events.',
      sizes: ['One Size'],
      colors: ['Brown', 'Black', 'Beige'],
      isNew: false,
      isSale: true,
      rating: 4.7,
      target: 'women'
    },
    {
      id: 5,
      name: 'Classic White Shirt',
      price: 49.99,
      image: 'https://tie-house.com/wp-content/uploads/2020/04/4R6A4581.jpg',
      category: 'Shirts',
      description: 'Timeless white shirt made from premium cotton. Perfect for both casual and formal occasions.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['White', 'Ivory'],
      isNew: false,
      isSale: false,
      rating: 4.6,
      target: 'men'
    },
    {
      id: 6,
      name: 'Slim Fit Jeans',
      price: 79.99,
      image: 'https://image.hm.com/assets/hm/cc/e7/cce7fe7e13fec53de270aeae6a3fff1cd76670bf.jpg?imwidth=1536',
      category: 'Pants',
      description: 'Modern slim fit jeans with stretch comfort. Features a classic five-pocket design.',
      sizes: ['28', '30', '32', '34', '36'],
      colors: ['Blue', 'Black', 'Gray'],
      isNew: true,
      isSale: false,
      rating: 4.4,
      target: 'all'
    },
    {
      id: 7,
      name: 'Leather Boots',
      price: 149.99,
      image: 'https://cdn.media.amplience.net/i/drmartens/25656001.80?$smart1024$&fmt=auto',
      category: 'Shoes',
      description: 'Premium leather boots with comfortable inner lining. Perfect for all seasons.',
      sizes: ['7', '8', '9', '10', '11'],
      colors: ['Brown', 'Black'],
      isNew: false,
      isSale: true,
      rating: 4.8,
      target: 'shoes'
    },
    {
      id: 8,
      name: 'Wool Sweater',
      price: 89.99,
      image: 'https://image.uniqlo.com/UQ/ST3/us/imagesgoods/475053/item/usgoods_01_475053_3x4.jpg?width=200',
      category: 'Sweaters',
      description: 'Warm and cozy wool sweater. Perfect for cold weather with a modern fit.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Gray', 'Navy', 'Burgundy'],
      isNew: true,
      isSale: false,
      rating: 4.7,
      target: 'all'
    }
  ];

  const categories = ['All', 'Dresses', 'Jackets', 'Shirts', 'Pants', 'Shoes', 'Sweaters', 'Accessories'];
  const priceRanges = [
    { label: 'All', value: 'all' },
    { label: 'Under $50', value: '0-50' },
    { label: '$50 - $100', value: '50-100' },
    { label: '$100 - $200', value: '100-200' },
    { label: 'Over $200', value: '200+' }
  ];

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  const handleQuickView = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const filteredProducts = products.filter(product => {
    if (filters.target !== 'all' && product.target !== filters.target) return false;
    if (filters.category !== 'all' && product.category !== filters.category) return false;
    if (filters.color !== 'all' && !product.colors.includes(filters.color)) return false;
    if (filters.size !== 'all' && !product.sizes.includes(filters.size)) return false;
    
    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-');
      if (max) {
        if (product.price < Number(min) || product.price > Number(max)) return false;
      } else {
        if (product.price < Number(min)) return false;
      }
    }
    
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low-high':
        return a.price - b.price;
      case 'price-high-low':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.isNew - a.isNew;
      default:
        return 0;
    }
  });

  return (
    <div className="products-page">
      {/* Target Filter Buttons */}
      <div className="target-filters" style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
        <button
          className={filters.target === 'all' ? 'active' : ''}
          onClick={() => handleFilterChange('target', 'all')}
        >
          All
        </button>
        <button
          className={filters.target === 'men' ? 'active' : ''}
          onClick={() => handleFilterChange('target', 'men')}
        >
          Men
        </button>
        <button
          className={filters.target === 'women' ? 'active' : ''}
          onClick={() => handleFilterChange('target', 'women')}
        >
          Women
        </button>
        <button
          className={filters.target === 'shoes' ? 'active' : ''}
          onClick={() => handleFilterChange('target', 'shoes')}
        >
          Shoes
        </button>
      </div>

      <div className="products-header">
        <h1>Our Collection</h1>
        <div className="products-controls">
          <div className="filters">
            <select 
              value={filters.category} 
              onChange={(e) => handleFilterChange('category', e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category.toLowerCase()}>
                  {category}
                </option>
              ))}
            </select>
            
            <select 
              value={filters.priceRange} 
              onChange={(e) => handleFilterChange('priceRange', e.target.value)}
            >
              {priceRanges.map(range => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>
          
          <div className="sort">
            <select value={sortBy} onChange={(e) => handleSortChange(e.target.value)}>
              <option value="featured">Featured</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="rating">Top Rated</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>
      </div>

      <div className="products-grid">
        {sortedProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              {product.isNew && <span className="badge new">New</span>}
              {product.isSale && <span className="badge sale">Sale</span>}
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
              <div className="price-rating">
                <p className="price">${product.price.toFixed(2)}</p>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <i 
                      key={i} 
                      className={`fas fa-star ${i < Math.floor(product.rating) ? 'filled' : ''}`}
                    ></i>
                  ))}
                  <span>({product.rating})</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

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
                {selectedProduct.isNew && <span className="badge new">New</span>}
                {selectedProduct.isSale && <span className="badge sale">Sale</span>}
              </div>
              <div className="modal-info">
                <h2>{selectedProduct.name}</h2>
                <p className="modal-category">{selectedProduct.category}</p>
                <div className="price-rating">
                  <p className="modal-price">${selectedProduct.price.toFixed(2)}</p>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <i 
                        key={i} 
                        className={`fas fa-star ${i < Math.floor(selectedProduct.rating) ? 'filled' : ''}`}
                      ></i>
                    ))}
                    <span>({selectedProduct.rating})</span>
                  </div>
                </div>
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

export default Products; 