import { useContext } from 'react';
import './MovieTvContainer.css';

import MovieContext from '../../context/MovieContext';
import { Link } from 'react-router-dom';
import settings from '../shared/settings/settings';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { IoIosStar } from 'react-icons/io';
import { HiClock } from 'react-icons/hi';

const MovieTvContainer = () => {
  const {
    moviesUpcoming,
    moviesPopular,
    moviesNowPlaying,
    moviesTopRated,
    tvAiringToday,
    tvPopular,
    tvOnTheAir,
    tvTopRated,
    type,
    loading,
  } = useContext(MovieContext);

  let content;
  if (type === 'movie') {
    content = (
      <>
        <div className='main_container'>
          <div className='container-header'>
            <h2 className='container-header--title'>Upcoming</h2>
          </div>
          <div className='container-content'>
            <Slider {...settings}>
              {moviesUpcoming.map((content) => (
                <div className='item' key={content.id}>
                  <Link
                    to={{
                      pathname: `/details/movie/${content.id}`,
                      state: { id: content.id },
                    }}
                  >
                    <img
                      src={
                        'https://image.tmdb.org/t/p/w300' + content.poster_path
                      }
                      alt={content.title}
                    />
                  </Link>
                  <div className='item-footer'>
                    <p>
                      <span>
                        <HiClock />
                        {(content.release_date &&
                          content.release_date.slice(0, 4)) ||
                          'N/A'}
                      </span>
                      <span>
                        <IoIosStar /> {content.vote_average}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className='main_container'>
          <div className='container-header'>
            <h2 className='container-header--title'>Popular</h2>
          </div>
          <div className='container-content'>
            <Slider {...settings}>
              {moviesPopular.map((content) => (
                <div className='item' key={content.id}>
                  <Link
                    to={{
                      pathname: `/details/movie/${content.id}`,
                      state: { id: content.id },
                    }}
                  >
                    <img
                      src={
                        'https://image.tmdb.org/t/p/w300' + content.poster_path
                      }
                      alt={content.title}
                    />
                  </Link>
                  <div className='item-footer'>
                    <p>
                      <span>
                        <HiClock />
                        {content.release_date &&
                          content.release_date.slice(0, 4)}
                      </span>
                      <span>
                        <IoIosStar /> {content.vote_average || 0}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className='main_container'>
          <div className='container-header'>
            <h2 className='container-header--title'>Now Playing</h2>
          </div>
          <div className='container-content'>
            <Slider {...settings}>
              {moviesNowPlaying.map((content) => (
                <div className='item' key={content.id}>
                  <Link
                    to={{
                      pathname: `/details/movie/${content.id}`,
                      state: { id: content.id },
                    }}
                  >
                    <img
                      src={
                        'https://image.tmdb.org/t/p/w300' + content.poster_path
                      }
                      alt={content.title}
                    />
                  </Link>
                  <div className='item-footer'>
                    <p>
                      {content.release_date ? (
                        <span>
                          <HiClock /> {content.release_date.slice(0, 4)}
                        </span>
                      ) : null}
                      {content.vote_average ? (
                        <span>
                          <IoIosStar /> {content.vote_average || 0}
                        </span>
                      ) : null}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className='main_container'>
          <div className='container-header'>
            <h2 className='container-header--title'>Top Rated</h2>
          </div>
          <div className='container-content'>
            <Slider {...settings}>
              {moviesTopRated.map((content) => (
                <div className='item' key={content.id}>
                  <Link
                    to={{
                      pathname: `/details/movie/${content.id}`,
                      state: { id: content.id },
                    }}
                  >
                    <img
                      src={
                        'https://image.tmdb.org/t/p/w300' + content.poster_path
                      }
                      alt={content.title}
                    />
                  </Link>
                  <div className='item-footer'>
                    <p>
                      <span>
                        <HiClock /> {content.release_date.slice(0, 4)}
                      </span>
                      <span>
                        <IoIosStar /> {content.vote_average || 0}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </>
    );
  }
  if (type === 'tv') {
    content = (
      <>
        <div className='main_container'>
          <div className='container-header'>
            <h2 className='container-header--title'>Airing Today</h2>
          </div>
          <div className='container-content'>
            <Slider {...settings}>
              {tvAiringToday.map((content) => (
                <div className='item' key={content.id}>
                  <Link
                    to={{
                      pathname: `/details/tv/${content.id}`,
                      state: { id: content.id },
                    }}
                  >
                    <img
                      src={
                        'https://image.tmdb.org/t/p/w300' + content.poster_path
                      }
                      alt={content.name}
                    />
                  </Link>
                  <div className='item-footer'>
                    <p>
                      {content.first_air_date ? (
                        <span>
                          <HiClock /> {content.first_air_date.slice(0, 4)}
                        </span>
                      ) : null}
                      {content.vote_average ? (
                        <span>
                          <IoIosStar /> {content.vote_average || 0}
                        </span>
                      ) : null}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className='main_container'>
          <div className='container-header'>
            <h2 className='container-header--title'>Popular</h2>
          </div>
          <div className='container-content'>
            <Slider {...settings}>
              {tvPopular.map((content) => (
                <div className='item' key={content.id}>
                  <Link
                    to={{
                      pathname: `/details/tv/${content.id}`,
                      state: { id: content.id },
                    }}
                  >
                    <img
                      src={
                        'https://image.tmdb.org/t/p/w300' + content.poster_path
                      }
                      alt={content.name}
                    />
                  </Link>
                  <div className='item-footer'>
                    <p>
                      <span>
                        <HiClock />
                        {content.first_air_date &&
                          content.first_air_date.slice(0, 4)}
                      </span>
                      <span>
                        <IoIosStar /> {content.vote_average || 0}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className='main_container'>
          <div className='container-header'>
            <h2 className='container-header--title'>On The Air</h2>
          </div>
          <div className='container-content'>
            <Slider {...settings}>
              {tvOnTheAir.map((content) => (
                <div className='item' key={content.id}>
                  <Link
                    to={{
                      pathname: `/details/tv/${content.id}`,
                      state: { id: content.id },
                    }}
                  >
                    <img
                      src={
                        'https://image.tmdb.org/t/p/w300' + content.poster_path
                      }
                      alt={content.name}
                    />
                  </Link>
                  <div className='item-footer'>
                    <p>
                      {content.first_air_date ? (
                        <span>
                          <HiClock /> {content.first_air_date.slice(0, 4)}
                        </span>
                      ) : null}
                      {content.vote_average ? (
                        <span>
                          <IoIosStar /> {content.vote_average || 0}
                        </span>
                      ) : null}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className='main_container'>
          <div className='container-header'>
            <h2 className='container-header--title'>Top Rated</h2>
          </div>
          <div className='container-content'>
            <Slider {...settings}>
              {tvTopRated.map((content) => (
                <div className='item' key={content.id}>
                  <Link
                    to={{
                      pathname: `/details/tv/${content.id}`,
                      state: { id: content.id },
                    }}
                  >
                    <img
                      src={
                        'https://image.tmdb.org/t/p/w300' + content.poster_path
                      }
                      alt={content.name}
                    />
                  </Link>
                  <div className='item-footer'>
                    <p>
                      <span>
                        <HiClock /> {content.first_air_date.slice(0, 4)}
                      </span>
                      <span>
                        <IoIosStar /> {content.vote_average || 0}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className='content container'>{loading === true ? content : null}</div>
  );
};

export default MovieTvContainer;
