import React from 'react';
import { Link } from 'react-router-dom';
import settings from '../settings/settings';

import Slider from 'react-slick';
import { IoIosStar } from 'react-icons/io';
import { HiClock } from 'react-icons/hi';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MainPageContainers = ({ title, movies, type }) => {
  const movieOrTv = (prop) =>
    type === 'movie' ? `/movie/${prop.id}` : `/tv/${prop.id}`;

  return (
    <div className='main_container'>
      <div className='container-header'>
        <h2 className='container-header--title'>{title}</h2>
      </div>
      <div className='container-content'>
        <Slider {...settings}>
          {movies.map((content) => (
            <div className='item' key={content.id}>
              <Link
                to={{
                  pathname: `${movieOrTv(content)}`,
                  state: { id: content.id },
                }}
              >
                <img
                  src={'https://image.tmdb.org/t/p/w300' + content.poster_path}
                  alt={content.name}
                />
              </Link>
              <div className='item-footer'>
                <p>
                  <span>
                    <HiClock />
                    {type === 'movie'
                      ? content.release_date && content.release_date.slice(0, 4)
                      : type === 'tv'
                      ? content.first_air_date &&
                        content.first_air_date.slice(0, 4)
                      : 'N/A'}
                  </span>
                  <span>
                    <IoIosStar /> {content.vote_average.toFixed(1) || 0}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MainPageContainers;
