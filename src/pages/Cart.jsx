import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
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
      
      {cartItems.length === 0 ? (
        <div className="card-body cart">
          <div className="col-sm-12 empty-cart-cls text-center">
            <img
              src="https://i.imgur.com/dCdflKN.png"
              width="130"
              height="130"
              className="img-fluid mb-4 mr-3"
              alt="Empty Cart"
            />
            <h3 className="cart-title"><strong>Your Cart is Empty</strong></h3>
            <h4>Add something to make me happy :)</h4>
            <Link to="/" className="btn btn-primary cart-btn-transform m-3">
              Continue Shopping
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="cart-title">Your Cart</h2>
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