import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import  {userAuth} from  "../context/AuthContext"
import { BsPerson } from "react-icons/bs"
const Nav = () => {
  const navigate = useNavigate()
  const {user, logOut} = userAuth()
  const handleLogOut = async () =>{
    try{
      await logOut();
      navigate('/');
    }catch (error){
          console.log(error)
    }
  }

  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
 
      <Link to='/home'>
        <h1 className="text-red-500 text-4xl cursor-pointer font-semibold font-lobster">IUT <span className='text-gray-200'>ECHI</span></h1>
      </Link>
 
      {user?.email ?
      (
        <div className="flex flex-row items-center">
            <Link to='/account'>
              <button className='text-white pr-4 flex flex-col text-center items-center gap-1'><BsPerson className='bg-gray-300 rounded-full text-black font-bold p-[3px] text-[1.8rem]'/><p className="text-white text-lg ">{user.email}</p> </button>
            </Link>

              <button
               onClick={handleLogOut} 
              className='bg-red-600 px-5 py-2 rounded cursor-pointer text-white'
              >
                Logout
              </button>
          </div>
          ):(
          <div className="">
          <Link to='/'>
            <button className='text-white pr-4'>signIn</button>
          </Link>
          <Link to='/signup'>
            <button className='bg-red-600 px-5 py-2 rounded cursor-pointer text-white'>Sign up</button>
          </Link>
        </div>)
      }
    </div>
  );
}

export default Nav;                                               