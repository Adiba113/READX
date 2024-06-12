import React from 'react'

function Banner() {
  return (
    <>
     <div className="max-w-screen-3xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">Left
          <h1 className="text-4xl font-bold">
            Hello, Welcome to <span className="text-pink-900">READX</span> to experience a new <span className="text-pink-500">collaborative educational environment!!!</span> 
          </h1>
          </div>
        <div className="w-full md:w-1/2">Right</div>
     </div> 
    </>
  )
}

export default Banner
