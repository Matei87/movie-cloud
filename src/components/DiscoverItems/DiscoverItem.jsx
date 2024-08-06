import React from 'react';
import './DiscoverItem.css';

import { IoIosStar } from 'react-icons/io';
import { HiClock } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import useFetcher from '../shared/useFetcher/useFetcher';
import defaultmovie from '../../pictures/defaultmovie.png';

const DiscoverItem = ({ title, apiUrl, type }) => {
  const { movies } = useFetcher(apiUrl);
  const movieOrTv = (prop) =>
    type === 'movie' ? `/movie/${prop.id}` : `/tv/${prop.id}`;

  return (
    <div id='discover-item' className='container'>
      <div className='discover-header'>
        <h1>{title}</h1>
      </div>

      <div className='discover-content'>
        {movies.map((content) => (
          <div className='discover-content-item' key={content.id}>
            <Link
              to={{
                pathname: `${movieOrTv(content)}`,
                state: { id: content.id },
              }}
            >
              <img
                src={
                  content.backdrop_path || content.poster_path
                    ? `https://image.tmdb.org/t/p/w200${
                        content.poster_path || content.backdrop_path
                      }`
                    : defaultmovie
                }
                alt={content.original_title}
              />
            </Link>
            <div className='discover-content-item-footer'>
              <p>
                <span className='HiClock'>
                  <HiClock />
                  {type === 'movie'
                    ? content.release_date && content.release_date.slice(0, 4)
                    : type === 'tv'
                    ? content.first_air_date &&
                      content.first_air_date.slice(0, 4)
                    : 'N/A'}
                </span>
                <span className='IoIosStar'>
                  <IoIosStar /> {content.vote_average.toFixed(1) || 0}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverItem;
