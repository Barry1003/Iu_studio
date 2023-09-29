import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {user, signUp} = UserAuth()
  const  handleSubmit =async (e) =>{
    e.preventDefault()
    try{
        await signUp(email, password)
    } catch(error){
      console.log(error)
    }
  }
  return (
    <>
      <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/f5257cb8-a05e-4a63-a0e1-6870ed62df84/NG-en-20230925-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen "></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
                <input 
                onChange={(e) => setEmail(e.target.value)}
                className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder="Email" autoComplete="email" />
                <input 
                onChange={(e) => setPassword(e.target.value)}
                className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder="Password" autoComplete="current-password" />
                <button className='bg-red-600 py-3 my-6 rounded font-bold '>Sign Up</button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p><input type="checkbox" name="" id="" /> Remember me</p>
                  <p>Need Help</p>
                </div>
                <p className='py-8 '><span className='text-gray-600'>Already subscribe to Iustudio? </span><Link to='/login'>Sign UP</Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;