import React, { useState } from 'react';
import { userAuth } from '../context/AuthContext';
import { db } from '../firebase';
import {BsHeart, BsHeartFill} from 'react-icons/bs'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

const Movie = ({item}) => {
  const {user} = userAuth()
  const [saved, setSaved] = useState(true)
  const [like, setLike] =useState(true)
  const movieID = doc(db, 'users', `${user?.email}`)
  const saveShow = async () =>{
    if(user?.email){
      setLike(!like)
      setSaved(false)
      await updateDoc(movieID, {
        savedShows: arrayUnion ({
          id: item.id,
          title: item.title,
          img: item.backdrop_path
        })
      })
    }else{
      alert('Please log in to save a movie')
    }
  }
  return (
<div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 group'>
  <img
    src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
    alt={item?.title}
    className="w-full h-auto block"
  />
  <div className='absolute top-0 left-0 w-full h-full group-hover:opacity-100 group-hover:bg-black/80 opacity-0 text-white'>
    <div className='absolute group top-4 left-4 flext gap-4'>
      <p onClick={saveShow} className=''>
        {like ? (
          <BsHeart className='text-red-500' />
        ) : (
          <BsHeartFill className='text-red-500' />
        )}
      </p>
  <div className='opacity-0 absolute top-0 left-0 bg-white text-black text-xs py-1 px-2 rounded mt-2 pointer-events-none invisible group-hover:visible'>
        click to save your favorite show
      </div>
    </div>
    <p className='whitespace-normal text-xs md:text-sm font-bold text-center absolute bottom-4 left-4'>
      {item.title}
    </p>
  </div>
</div>

  )
}

export default Movie
