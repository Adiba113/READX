import React from 'react';

export default function Cards({ item }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={item.image} alt={item.title} /></figure>
      <div className="card-body">
        <h2 className="card-title">
          {item.title}
          {item.isNew && <div className="badge badge-secondary">NEW</div>}
        </h2>
        <p>{item.description}</p>
        <div className="card-actions justify-end">
          {item.tags && item.tags.map((tag, index) => (
            <div className="badge badge-outline" key={index}>{tag}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
