import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
function Signup() {
  return (
   <>
   <div className='flex h-screen items-center justify-center 
   '>
   <div className="w-[600px]">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      
      <Link to="/"className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >✕
        </Link>
        
    </form>
    <h3 className="font-bold text-lg">SignUp</h3>
     {/* Name*/}
     <div className='mt-4 space-y-2'>
        <span  className="font-bold text-lg">
            Name</span>
            <br />
            <input  type="text"
            placeholder="Enter your name" className="w-80 px-3 py-1 border rounded-md outline-none"
            />
        
    </div>
    

    {/*email */}
    <div className='mt-4 space-y-2'>
        <span  className="font-bold text-lg">
            Email</span>
            <br />
            <input  type="email"
            placeholder="Enter your email" className="w-80 px-3 py-1 border rounded-md outline-none"
            />
        
    </div>
    {/* password*/}
    <div className='mt-4 space-y-2'>
        <span  className="font-bold text-lg">
            Password</span>
            <br />
            <input  type="text"
            placeholder="Enter your password" className="w-80 px-3 py-1 border rounded-md outline-none"
            />
        
    </div>
    <div className="flex justify-around mt-4">
        {/*button8*/}
       <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Signup</button>
     <p>
       Have account?{" "}
       <a className='bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cousor-pointer'
              onClick={()=>document.getElementById("my_modal_3").showModal()}
              >Login</a>
              <Login/>
        
         </p>   
    </div>
  </div>
</div>
   </div>
   </>
  )
}

export default Signup
