import React, { useState, useEffect } from 'react';
import './Cart.css'; 

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const handleQuantityChange = (id, delta) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleCheckout = () => {
    alert('Checkout successful! Thank you for your purchase.');
    localStorage.removeItem('cart');
    setCartItems([]);
  };

  return (
    <div className="container cart-container">
      <h2 className="cart-title">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <div>
          <div className="row">
            {cartItems.map((item) => (
              <div className="col-12 mb-3" key={item.id}>
                <div className="card cart-card">
                  <div className="row g-0">
                    <div className="col-md-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid"
                        style={{ height: '100px', objectFit: 'cover' }}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body cart-card-body">
                        <h5 className="cart-card-title">{item.name}</h5>
                        <p className="cart-card-text">
                          <strong>Price:</strong> ${item.price}
                        </p>
                        <p className="cart-card-text">
                          <strong>Quantity:</strong>
                          <div className="cart-quantity-buttons">
                            <button
                              className="btn btn-sm btn-secondary"
                              onClick={() => handleQuantityChange(item.id, -1)}
                            >
                              -
                            </button>
                            {item.quantity}
                            <button
                              className="btn btn-sm btn-secondary"
                              onClick={() => handleQuantityChange(item.id, 1)}
                            >
                              +
                            </button>
                          </div>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-2 d-flex align-items-center justify-content-center">
                      <button
                        className="cart-remove-button"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-end">
            <h4 className="cart-total">Total: ${calculateTotal()}</h4>
            <button className="cart-checkout-button" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;