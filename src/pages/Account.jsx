import React from 'react'
import Saved from './Saved'

const Account = () => {
  return (
    <>
        <div className="text-white w-full">
           <img className= "w-full h-[400px] object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/f5257cb8-a05e-4a63-a0e1-6870ed62df84/NG-en-20230925-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
            <div className="bg-black/20 fixed top-4 w-full h-[550px]">
                <div className="absolute top-[20%] p-4 md:p-8">
                  <h1 className='text-3xl md:txet-3xl font-bold '>My Show</h1>
                </div>
            </div>
        </div>
        <Saved/>
    </>
  )
}

export default Account
