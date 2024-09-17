// CartModal.jsx
import React from 'react';
import { useCart } from '../context/CartProvider';
import './CartModal.css'

const CartModal = ({ isOpen, onClose }) => {
  const { cart } = useCart();

  return (
    <dialog className={`modal ${isOpen ? 'modal-open' : ''}`} onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h2 className="font-bold text-lg">Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="my-4">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between">
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="modal-action">
          <button className="btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </dialog>
  );
};

export default CartModal;