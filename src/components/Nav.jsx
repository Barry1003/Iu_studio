import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component

const Nav = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to='/'>
        <h1 className="text-red-500 text-4xl cursor-pointer font-semibold font-lobster">IUT <span className='text-gray-200'>ECHI</span></h1>
      </Link>
      <div className="">
        <Link to='/login'>
          <button className='text-white pr-4'>Sign in</button>
        </Link>
        <Link to='/signup'>
          <button className='bg-red-600 px-5 py-2 rounded cursor-pointer text-white'>Sign up</button>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
