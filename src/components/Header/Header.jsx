import { useContext } from 'react';
import './Header.css';

import Loader from '../Loader/Loader';
import MovieContext from '../../context/MovieContext';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MOVIE_BACKDROP = 'https://image.tmdb.org/t/p/w1280';

const Header = () => {
  const { moviesUpcoming, tvAiringToday, type, loading } =
    useContext(MovieContext);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 8000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const movieGenres = [];
  const movieTitle = [];
  const moviePicture = [];
  const movieYear = [];
  const movieRating = [];
  const movieId = [];

  const tvGenres = [];
  const tvTitle = [];
  const tvPicture = [];
  const tvYear = [];
  const tvRating = [];
  const tvId = [];

  const handleBackground = () => {
    const moviesGenreList = {
      genres: [
        {
          id: 28,
          name: 'Action',
        },
        {
          id: 12,
          name: 'Adventure',
        },
        {
          id: 16,
          name: 'Animation',
        },
        {
          id: 35,
          name: 'Comedy',
        },
        {
          id: 80,
          name: 'Crime',
        },
        {
          id: 99,
          name: 'Documentary',
        },
        {
          id: 18,
          name: 'Drama',
        },
        {
          id: 10751,
          name: 'Family',
        },
        {
          id: 14,
          name: 'Fantasy',
        },
        {
          id: 36,
          name: 'History',
        },
        {
          id: 27,
          name: 'Horror',
        },
        {
          id: 10402,
          name: 'Music',
        },
        {
          id: 9648,
          name: 'Mystery',
        },
        {
          id: 10749,
          name: 'Romance',
        },
        {
          id: 878,
          name: 'Science Fiction',
        },
        {
          id: 10770,
          name: 'TV Movie',
        },
        {
          id: 53,
          name: 'Thriller',
        },
        {
          id: 10752,
          name: 'War',
        },
        {
          id: 37,
          name: 'Western',
        },
      ],
    };

    const tvGenreList = {
      genres: [
        {
          id: 10759,
          name: 'Action & Adventure',
        },
        {
          id: 16,
          name: 'Animation',
        },
        {
          id: 35,
          name: 'Comedy',
        },
        {
          id: 80,
          name: 'Crime',
        },
        {
          id: 99,
          name: 'Documentary',
        },
        {
          id: 18,
          name: 'Drama',
        },
        {
          id: 10751,
          name: 'Family',
        },
        {
          id: 10762,
          name: 'Kids',
        },
        {
          id: 9648,
          name: 'Mystery',
        },
        {
          id: 10763,
          name: 'News',
        },
        {
          id: 10764,
          name: 'Reality',
        },
        {
          id: 10765,
          name: 'Sci-Fi & Fantasy',
        },
        {
          id: 10766,
          name: 'Soap',
        },
        {
          id: 10767,
          name: 'Talk',
        },
        {
          id: 10768,
          name: 'War & Politics',
        },
        {
          id: 37,
          name: 'Western',
        },
      ],
    };

    let background;
    if (type === 'movie') {
      background = moviesUpcoming.slice(0, 3) || [];

      if (background && moviesGenreList.genres) {
        background.forEach((item) => {
          item.genre_ids = moviesGenreList.genres
            .filter((x) => x.id === item.genre_ids[0])
            .map((x) => movieGenres.push(x.name));
          movieTitle.push(item.title);
          movieYear.push(item.release_date.slice(0, 4));
          moviePicture.push(item.backdrop_path || item.poster_path);
          movieRating.push(item.vote_average.toFixed(1));
          movieId.push(item.id);
        });
      }
    }

    if (type === 'tv') {
      background = tvAiringToday.slice(0, 3) || [];

      if (background && tvGenreList.genres) {
        background.forEach((item) => {
          item.genre_ids = tvGenreList.genres
            .filter((x) => x.id === item.genre_ids[0])
            .map((x) => tvGenres.push(x.name));
          tvTitle.push(item.name);
          tvYear.push(item.first_air_date.slice(0, 4));
          tvPicture.push(item.backdrop_path || item.poster_path);
          tvRating.push(item.vote_average.toFixed(1));
          tvId.push(item.id);
        });
      }
    }
    return background;
  };

  handleBackground();

  return (
    <>
      {loading === true ? (
        <div className='header'>
          {type === 'movie' ? (
            <div className='main_container_header'>
              <div className='container-content'>
                <Slider {...settings}>
                  <div className='header-item'>
                    <Link
                      to={{
                        pathname: `/movie/${movieId[0]}`,
                        state: { id: movieId[0] },
                      }}
                    >
                      <img
                        src={MOVIE_BACKDROP + moviePicture[0]}
                        alt={movieTitle[0]}
                      />
                      <div className='item-text'>
                        <span className='header-title'>Upcoming</span>
                        <span className='header-title-name'>
                          {movieTitle[0]}
                        </span>
                        <span className='header-year-rating'>
                          {movieGenres[0]} | {movieYear[0]} | {movieRating[0]}{' '}
                          Rating
                        </span>
                      </div>
                    </Link>
                  </div>

                  <div className='header-item'>
                    <Link
                      to={{
                        pathname: `/movie/${movieId[1]}`,
                        state: { id: movieId[1] },
                      }}
                    >
                      <img
                        src={MOVIE_BACKDROP + moviePicture[1]}
                        alt={movieTitle[1]}
                      />
                      <div className='item-text'>
                        <span className='header-title'>Upcoming</span>
                        <span className='header-title-name'>
                          {movieTitle[1]}
                        </span>
                        <span className='header-year-rating'>
                          {movieGenres[1]} | {movieYear[1]} | {movieRating[1]}{' '}
                          Rating
                        </span>
                      </div>
                    </Link>
                  </div>

                  <div className='header-item'>
                    <Link
                      to={{
                        pathname: `/movie/${movieId[2]}`,
                        state: { id: movieId[2] },
                      }}
                    >
                      <img
                        src={MOVIE_BACKDROP + moviePicture[2]}
                        alt={movieTitle[2]}
                      />
                      <div className='item-text'>
                        <span className='header-title'>Upcoming</span>
                        <span className='header-title-name'>
                          {movieTitle[2]}
                        </span>
                        <span className='header-year-rating'>
                          {movieGenres[2]} | {movieYear[2]} | {movieRating[2]}{' '}
                          Rating
                        </span>
                      </div>
                    </Link>
                  </div>
                </Slider>
              </div>
            </div>
          ) : null}

          {type === 'tv' ? (
            <div className='main_container_header'>
              <div className='container-content'>
                <Slider {...settings}>
                  <div className='header-item'>
                    <Link
                      to={{
                        pathname: `/tv/${tvId[0]}`,
                        state: { id: tvId[0] },
                      }}
                    >
                      <img
                        src={MOVIE_BACKDROP + tvPicture[0]}
                        alt={tvTitle[0]}
                      />
                      <div className='item-text'>
                        <span className='header-title'>Airing Today</span>
                        <span className='header-title-name'>{tvTitle[0]}</span>
                        <span className='header-year-rating'>
                          {tvGenres[0]} | {tvYear[0]} | {tvRating[0]} Rating
                        </span>
                      </div>
                    </Link>
                  </div>

                  <div className='header-item'>
                    <Link
                      to={{
                        pathname: `/tv/${tvId[1]}`,
                        state: { id: tvId[1] },
                      }}
                    >
                      <img
                        src={MOVIE_BACKDROP + tvPicture[1]}
                        alt={tvTitle[1]}
                      />
                      <div className='item-text'>
                        <span className='header-title'>Airing Today</span>
                        <span className='header-title-name'>{tvTitle[1]}</span>
                        <span className='header-year-rating'>
                          {tvGenres[1]} | {tvYear[1]} | {tvRating[1]} Rating
                        </span>
                      </div>
                    </Link>
                  </div>

                  <div className='header-item'>
                    <Link
                      to={{
                        pathname: `/tv/${tvId[2]}`,
                        state: { id: tvId[2] },
                      }}
                    >
                      <img
                        src={MOVIE_BACKDROP + tvPicture[2]}
                        alt={tvTitle[2]}
                      />
                      <div className='item-text'>
                        <span className='header-title'>Airing Today</span>
                        <span className='header-title-name'>{tvTitle[2]}</span>
                        <span className='header-year-rating'>
                          {tvGenres[2]} | {tvYear[2]} | {tvRating[2]} Rating
                        </span>
                      </div>
                    </Link>
                  </div>
                </Slider>
              </div>
            </div>
          ) : null}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Header;
