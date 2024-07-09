 import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
import axios from "axios";
function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
   const userInfo={
    fullname:data.fullname,
    email:data.email,
    password:data.password,
   }
   await axios.post("http://localhost:4001/user/Signup",userInfo)
   .then((res)=>{
    console.log(res.data)
    if(res.data){
      alert("Signup Successfull")
    }
   }).catch((err) =>{
    if(err.response){
      console.log(err);
      alert("Error:" +err.response.data.message);
    }
   })
  };
  return (
   <>
   <div className='flex h-screen items-center justify-center 
   '>
   <div className="w-[600px] ">
  <div className="modal-box">
    
      {/* if there is a button in form, it will close the modal */}
      <form onSubmit={handleSubmit(onSubmit)} dialog="true">
      <Link to="/"className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2  dark:bg-slate-900 dark:text-white"
        >✕
        </Link>
        
   
    <h3 className="font-bold text-lg ">SignUp</h3>
     {/* Name*/}
     <div className='mt-4 space-y-2'>
        <span  className="font-bold text-lg">
            Name</span>
            <br />
            <input  type="text"
            placeholder="Enter your name" 
            className="w-80 px-3 py-1 border rounded-md outline-none"
            {...register("fullname", { required: true })}
            />
            <br />
        {errors.fullname && <span className='text-sm text-red-500'>
          Please input your name!</span>}
    </div>
    

    {/*email */}
    <div className='mt-4 space-y-2'>
        <span  className="font-bold text-lg">
            Email</span>
            <br />
            <input  type="email"
            placeholder="Enter your email"
             className="w-80 px-3 py-1 border rounded-md outline-none"
             {...register("email", { required: true })}
              />
              <br />
              {errors.email && <span
               className='text-sm text-red-500'>This field is required</span>}
        
    </div>
    {/* password*/}
    <div className='mt-4 space-y-2'>
        <span  className="font-bold text-lg">
            Password</span>
            <br />
            <input  type="password"
            placeholder="Enter your password" 
            className="w-80 px-3 py-1 border rounded-md outline-none"
            {...register("password", { required: true })}
              />
              <br />
              {errors.password && <span 
              className='text-sm text-red-500'>
                This field is required</span>}


        
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
    </form>
  </div>
</div>

   </div>
   </>
  )
}

export default Signup
