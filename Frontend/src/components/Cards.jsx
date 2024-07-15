import React from 'react'

export default function Cards({item}) {
  return (
    <div className="my-6 mx-4 p-3">
      <div className="card w-80 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img src={item.image} alt="Shoes" className="h-40 object-cover" />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-lg">
            {item.name}
            <div className="badge badge-secondary ml-2">NEW</div>
          </h2>
          <p className="text-sm">{item.title}</p>
          <div className="card-actions justify-between items-center mt-4">
            <div className="badge badge-outline">${item.price}</div> 
            <div className="cursor-pointer px-3 py-1 rounded-full border-2 hover:bg-pink-500 hover:text-white duration-200 text-sm">Buy Now</div>
          </div>
        </div>
      </div>
    </div>
  )
}
