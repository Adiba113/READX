// CartPage.jsx
import React from 'react';
import { useCart } from '../context/CartProvider';
import { useNavigate } from 'react-router-dom';
import './CartPage.css';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, confirmOrder } = useCart();
  const navigate = useNavigate();

  const handleConfirmOrder = () => {
    confirmOrder(); // Save the order and clear the cart
    navigate('/myOrders'); // Redirect to My Orders page
  };

  return (
    <div className="cart-page-container">
      <h1 className="text-2xl font-bold text-white">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-white">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
          {cart.map((item) => (
            <div key={item.id} className="cart-item border p-4 rounded shadow">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-t" />
              <h2 className="text-lg font-semibold text-white">{item.name}</h2>
              <p className="text-lg text-white">${item.price.toFixed(2)} x {item.quantity}</p>
              <div className="flex justify-between mt-2 items-center">
                <div>
                  <button onClick={() => updateQuantity(item.id, -1)} disabled={item.quantity <= 1}>
                    -
                  </button>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <button onClick={handleConfirmOrder} className="mt-4 bg-green-500 text-white p-2 rounded">
        Confirm Order
      </button>
    </div>
  );
};

export default CartPage;