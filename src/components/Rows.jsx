import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from './Movie';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Rows = ({ title, fetchURL, RowId }) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovie(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    var slider = document.getElementById('slider' + RowId);
    slider.scrollLeft -= 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider' + RowId);
    slider.scrollLeft += 500;
  };

  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className='relative group flex items-center'>
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 left-0 hidden group-hover:block'
        />
        <div
          className='w-full h-full overflow-x-scroll scroll-smooth scrollbar-hide whitespace-nowrap'
          id={'slider' + RowId}
        >
          {movie.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={40}
          className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 right-0 hidden group-hover:block'
        />
      </div>
    </>
  );
};

export default Rows;
