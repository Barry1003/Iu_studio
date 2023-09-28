import React, { useEffect, useState } from 'react';
import request from '../Request'
import axios from 'axios'

const Rows = ({ title, fetchURL }) => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovie(response.data.results)
    })
  }, [fetchURL])

  console.log(movie)

  return (
    <div>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className="relative flex items-center">
        <div id="slider">
          {movie.map((item, id) => (
            <div key={id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
              <img src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} className="" />
              <div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Rows
