import React, { useState, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { userAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';

const Saved = () => {
  const [movie, setMovie] = useState([]);
  const { user } = userAuth();

  useEffect(() => {
    if (user?.email) {
      const docRef = doc(db, 'users', user.email);
      const unsubscribe = onSnapshot(docRef, (snapshot) => {
        if (snapshot.exists()) {
          setMovie(snapshot.data()?.savedShows);
        } else {
          setMovie([]);
        }
      });
      return unsubscribe;
    }
  }, [user?.email]);

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft -= 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft += 500;
  };

  return (
    <div>
      <h2 className='text-white font-bold md:text-xl p-4'>My Shows</h2>
      <div className='relative group flex items-center'>
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 left-0 hidden group-hover:block'
        />
        <div
          className='w-full h-full overflow-x-scroll scroll-smooth scrollbar-hide whitespace-nowrap'
          id={'slider'}
        >
          {movie.map((item, id) => (
            <div
              key={id}
              className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                alt={item?.title}
                className='w-full h-auto block'
              />
              <div className='absolute top-0 left-0 w-full h-full hover:opacity-100 hover:bg-black/80 opacity-0 text-white'>
                <p className='whitespace-normal text-xs md:text-sm font-bold  flex justify-center items-center h-full text-center'>
                  {item?.title}
                </p>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={40}
          className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 right-0 hidden group-hover:block'
        />
      </div>
    </div>
  );
};

export default Saved;
