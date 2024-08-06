import { useContext, useState, useEffect } from 'react';
import './Controller.css';

import MovieContext from '../../context/MovieContext';

const Controller = () => {
  const { type, handleMovies, handleTV, loading } = useContext(MovieContext);
  const [, setData] = useState(MovieContext);

  useEffect(() => {
    if (!type) {
      localStorage.setItem('type', type) || handleMovies();
    }
  }, []);

  useEffect(() => {
    if (type === 'movie') {
      handleMovies();
    } else if (type === 'tv') {
      handleTV();
    }
  }, []);

  return (
    <>
      {loading === true ? (
        <div className='MoviesOrTv container'>
          <button
            className={` btn btn-outline-primary ${
              type === 'movie' ? 'btn-selected' : null
            }`}
            onClick={() => {
              handleMovies();
              setData({ type: 'movie' });
            }}
          >
            MOVIES
          </button>
          <button
            className={` btn btn-outline-primary ${
              type === 'tv' ? 'btn-selected' : null
            }`}
            onClick={() => {
              handleTV();
              setData({ type: 'tv' });
            }}
          >
            TV SHOWS
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Controller;
