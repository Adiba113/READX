// MyOrders.jsx
import React from 'react';
import { useCart } from '../context/CartProvider';

const MyOrders = () => {
  const { orders } = useCart(); // Get the orders from the context

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">My Orders</h1>
      {orders.length === 0 ? (
        <p>Your order history is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
          {orders.map((item) => (
            <div key={item.id} className="cart-item border p-4 rounded shadow">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-t" />
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-lg">${item.price.toFixed(2)} x {item.quantity}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;