import React, { useEffect, useState } from 'react';
import request from '../Request';
import axios from 'axios';

const Main = () => { 
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios.get(request.requestTrending).then((response) => {
       

      const randomMovie = response.data.results[Math.floor(Math.random() * response.data.results.length)];
      setMovie(randomMovie);
    });
  }, []);

  const truncate = (num, str) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

  return (
    <div className='w-full h-[550px] text-white '>
      <div className="w-full h-full relative">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} className="w-full h-full object-cover" />
        <div className="absolute w-full top-[35%] p-4 md:p-8  h-full">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="my-4">
            <button className='border font-bold capitalize bg-gray-300 text-black py-2 px-5'>
              play
            </button>
            <button className='border text-white font-bold capitalize py-2 px-5 ml-4'>
              watch later
            </button>
          </div>
          <p className="text-gray-400 my-4 text-sm">Released: {movie?.release_date}</p>
          <p className="text-gray-200 w-full sm:max-w-[35%] md:max-w-[75%] lg:max-w-[35%]">
            {truncate(150, movie?.overview)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
