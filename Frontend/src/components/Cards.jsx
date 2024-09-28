import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartProvider';

export default function Cards({ item }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(item);
    alert(`${item.name} has been added to your cart!`);
  };

  return (
    <div className="mt-4 my-3 p-3">
      <div className="card w-96 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <Link to={`/book/${item._id}`}>
          <figure>
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-72 object-cover" // Enforce consistent size
            />
          </figure>
        </Link>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${item.price}</div>
            <div
              className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200"
              onClick={handleAddToCart}
            >
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
