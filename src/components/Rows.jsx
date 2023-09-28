import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Movie from './Movie';

const Rows = ({ title, fetchURL }) => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovie(response.data.results)
    })
  }, [fetchURL])

  console.log(movie)

  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className="relative flex items-center">
        <div className=" w-full h-full overflow-x-scroll scroll-smooth scrollbar-hide whitespace-nowrap " id="slider">
          {movie.map((item, id) => (
           <Movie key={id} item={item}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default Rows
