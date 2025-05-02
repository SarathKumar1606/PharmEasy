import React from 'react';
import paracetamol from '../assets/paracetamol.jpeg';
import ibuprofen from '../assets/ibuprofen.jpeg';
import cetirizine from '../assets/cetirizine.jpeg';
import ironRedSyrup from '../assets/Iron Red Syrup.jpeg';
import vitamin from '../assets/vitamin c.jpeg';
import eno from '../assets/eno.jpeg';
import metformin from '../assets/metformin.jpeg';
import omeprazole from '../assets/omeprazole.jpeg';

function Medicines() {
  const popularProducts = [
    { id: 1, name: "Paracetamol", price: 2, image: paracetamol },
    { id: 2, name: "Ibuprofen", price: 3, image: ibuprofen },
    { id: 3, name: "Cetirizine", price: 1.5, image: cetirizine },
    { id: 4, name: "Iron Red Syrup", price: 5, image: ironRedSyrup },
    { id: 5, name: "Vitamin C", price: 1, image: vitamin },
    { id: 6, name: "ENO Powder", price: 2.5, image: eno },
    { id: 7, name: "Metformin", price: 4, image: metformin },
    { id: 8, name: "Omeprazole", price: 3.5, image: omeprazole },
  ];

  const handleAddToCart = (medicine) => {
    // Retrieve the current cart from localStorage or initialize an empty array
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the item already exists in the cart
    const existingItem = cartItems.find((item) => item.id === medicine.id);

    if (existingItem) {
      // If the item exists, increase its quantity
      existingItem.quantity += 1;
    } else {
      // If the item doesn't exist, add it to the cart with quantity 1
      cartItems.push({ ...medicine, quantity: 1 });
    }

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cartItems));

    // Notify the user
    alert(`${medicine.name} has been added to your cart.`);
  };

  const handleBuyNow = (medicine) => {
    alert(`You are buying: ${medicine.name}`);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Available Medicines</h2>
      <div className="row">
        {popularProducts.map((medicine) => (
          <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={medicine.id}>
            <div className="card h-100">
              <img
                src={medicine.image}
                alt={medicine.name}
                className="card-img-top"
                style={{ height: '150px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h6 className="card-title text-truncate">{medicine.name}</h6>
                <p className="card-text">
                  <strong>Price:</strong> ${medicine.price}
                </p>
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleAddToCart(medicine)}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => handleBuyNow(medicine)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Medicines;