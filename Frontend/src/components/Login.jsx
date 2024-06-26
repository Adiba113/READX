import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Replace with your actual login logic
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          {/* Corrected form structure */}
          <form onSubmit={handleSubmit(onSubmit)} dialog="true">
            {/* Close button */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
            <h3 className="font-bold text-lg">Login</h3>
            {/* Email */}
            <div className='mt-4 space-y-2'>
              <span className="font-bold text-lg">Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && <span  className='text-sm text-red-500'>This field is required</span>}
            </div>
            {/* Password */}
            <div className='mt-4 space-y-2'>
              <span className="font-bold text-lg">Password</span>
              <br />
              <input
                type="password" // Changed type to "password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && <span  className='text-sm text-red-500'>This field is required</span>}
            </div>
            {/* Login button */}
            <div className="flex justify-around mt-4">
              <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200' type="submit">
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link to="/signup" className='underline text-blue-500 cursor-pointer'>
                  SignUp
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
