import React, { useState } from 'react';
import {BsHeart, BsHeartFill} from 'react-icons/bs'

const Movie = ({item}) => {
      const [like, setLike] =useState(false)
  return (
     <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
        <img src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} className="w-full h-auto block" />
          <div className='absolute top-0 left-0 w-full h-full hover:opacity-100 hover:bg-black/80 opacity-0 text-white'>
             <p className='whitespace-normal text-xs md:text-sm font-bold  flex justify-center items-center h-full text-center'>{item.title}</p>
              <p>{like ? < BsHeart className='absolute top-4 left-4'/> : < BsHeartFill className='absolute top-4 left-4'/> }</p>
            </div>
      </div>
  )
}

export default Movie
