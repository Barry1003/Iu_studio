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
     <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
        <img src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} className="w-full h-auto block" />
          <div className='absolute top-0 left-0 w-full h-full hover:opacity-100 hover:bg-black/80 opacity-0 text-white'>
             <p className='whitespace-normal text-xs md:text-sm font-bold  flex justify-center items-center h-full text-center'>{item.title}</p>
              <p onClick={saveShow}>{like ? < BsHeart className='absolute top-4 left-4'/> : < BsHeartFill className='absolute top-4 left-4'/> }</p>
            </div> 
      </div>
  )
}

export default Movie
