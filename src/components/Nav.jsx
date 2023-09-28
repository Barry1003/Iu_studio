import React from 'react'

const Nav = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <h1 className="text-red-500 text-4xl cursor-pointer font-semibold font-lobster">IUT <span className='text-gray-200'>ECHI</span></h1>
    <div className="">
      <button className='text-white pr-4'>Sign in</button>
      <button className='bg-red-600 px-5 py-2 rounded cursor-pointer text-white'>Sign up</button>
    </div>
    </div>
  )
}

export default Nav
