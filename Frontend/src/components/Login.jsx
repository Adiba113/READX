import React from 'react'

function Login() {
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Login</h3>
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
    <div>
        
    </div>
  </div>
</dialog>
    </div>
  )
}

export default Login
