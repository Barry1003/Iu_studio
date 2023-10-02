import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userAuth } from '../context/AuthContext';
import { BsCameraVideoFill } from 'react-icons/bs';

const Nav = () => {
  const navigate = useNavigate();
  const { user, logOut } = userAuth();

  // Function to generate a random background color
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/home">
        <h1 className="text-red-500 flex items-center  text-3xl cursor-pointer font-[500] font-lobster">
          <BsCameraVideoFill className='mr-3 text-4xl'/>
          IU<span className="text-gray-200">studio</span>
        </h1>
      </Link>

      {user?.email ? (
        <div className="flex sm:flex-row items-center justify-end gap-4 flex-col sm:items-end">
          <Link to="/account">
            <button
              className="text-white pr-4 flex flex-col text-center items-center gap-1"
            >
              <div
                className=" rounded-full text-black font-bold p-6 text-[1.8rem] w-[40px] h-[40px] flex justify-center items-center"
                style={{ borderRadius: '50%', backgroundColor: getRandomColor() }}
              >
                {`${user.email.charAt(0).toUpperCase()}`}
              </div>
               <p  className='rounded-md px-4 py-2  bg-red-500 font-quicksand font-bold'>My Saved Shows</p>
            </button>
          </Link>

          <button
            onClick={handleLogOut}
            className="bg-red-600 px-5 py-2 rounded cursor-pointer text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="">
          <Link to="/">
            <button className="text-white pr-4">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 px-5 py-2 rounded cursor-pointer text-white">
              Sign up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Nav;
