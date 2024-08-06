import { useEffect, useState, useCallback } from 'react';
import './DetailsPerson.css';

import theatre from '../../pictures/theatre.jpg';
import pic from '../../pictures/default.png';
import defaultmovie from '../../pictures/defaultmovie.png';

import { IoIosStar } from 'react-icons/io';
import { HiClock } from 'react-icons/hi';
import { Link, useParams } from 'react-router-dom';
import settings from '../shared/settings/settings';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const DetailsPerson = () => {
  const { id } = useParams();
  const [data, setData] = useState({
    name: '',
    birthday: '',
    known_for: '',
    biography: '',
    place_of_birth: '',
    picture: '',

    //movie credits
    movie_credits: [],

    //tv credits
    tv_credits: [],

    //loading
    loading: false,
  });

  const fetchPersonDetails = useCallback(async () => {
    const urlPersonDetails = `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
    const urlMovieCredits = `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
    const urlTvCredits = `https://api.themoviedb.org/3/person/${id}/tv_credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
    const request = [
      fetch(urlPersonDetails),
      fetch(urlMovieCredits),
      fetch(urlTvCredits),
    ];
    const response = await Promise.all(request);
    const data = await Promise.all(response.map((res) => res.json()));
    //console.log(data);
    setData({
      name: data[0].name,
      biography: data[0].biography,
      birthday: data[0].birthday,
      known_for: data[0].known_for_department,
      place_of_birth: data[0].place_of_birth,
      picture: data[0].profile_path,
      movie_credits: data[1].cast,
      tv_credits: data[2].cast,
      loading: true,
    });
  }, [id]);

  useEffect(() => {
    fetchPersonDetails();
  }, [fetchPersonDetails]);

  const {
    name,
    biography,
    birthday,
    known_for,
    place_of_birth,
    picture,
    movie_credits,
    tv_credits,
  } = data;

  let content;

  content = (
    <div id='person-details'>
      <div className='person-details-header'>
        <div className='person-details-header-image'>
          <img src={theatre} alt='theatre' />
        </div>

        <div className='person-details-header-content'>
          <div className='person-details-header-content-picture'>
            <img
              src={picture ? 'https://image.tmdb.org/t/p/w200' + picture : pic}
              alt={name}
            />
          </div>
          <div className='person-details-header-content-details'>
            <span className='person-details-header-content-details-title'>
              {name}
            </span>
            <span className='person-details-header-content-details-known_for'>
              {known_for ? `Known for: ${known_for}` : null}
            </span>
            <span className='person-details-header-content-details-birthday'>
              {birthday
                ? `Date of birth: ${birthday.split('-').reverse().join('/')}`
                : null}
            </span>
            <span className='person-details-header-content-details-place_of_birth'>
              {place_of_birth ? `Place of birth: ${place_of_birth}` : null}
            </span>
          </div>
        </div>
      </div>

      <div className='person-details-content container'>
        {biography.length > 0 ? (
          <div className='person-details-content-biography'>
            <h2 className='person-details-content-biography-title'>
              BIOGRAPHY
            </h2>
            <p className='person-details-content-biography-content'>
              {biography}
            </p>
          </div>
        ) : null}

        {movie_credits.length > 0 ? (
          <div className='person-details-content-cast-movies'>
            <div className='person-details-content-cast-movies-header'>
              <h2 className='person-details-content-cast-movies-title'>
                MOVIE CREDITS
              </h2>
            </div>
            <div className='person-details-content-cast-movies-content'>
              <Slider {...settings}>
                {movie_credits.map((content) => (
                  <div
                    className='person-details-content-cast-movies-cast-item'
                    key={content.id}
                  >
                    <Link
                      to={{
                        pathname: `/movie/${content.id}`,
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
                    <div className='person-details-content-cast-movies-cast-item-footer'>
                      <p>
                        <span className='HiClock'>
                          <HiClock />
                          {(content.release_date &&
                            content.release_date.slice(0, 4)) ||
                            'N/A'}
                        </span>
                        <span className='IoIosStar'>
                          <IoIosStar /> {content.vote_average.toFixed(1) || 0}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        ) : null}

        {tv_credits.length > 0 ? (
          <div className='person-details-content-cast-tv'>
            <div className='person-details-content-cast-tv-header'>
              <h2 className='person-details-content-cast-tv-title'>
                TV CREDITS
              </h2>
            </div>
            <div className='person-details-content-cast-tv-content'>
              <Slider {...settings}>
                {tv_credits.map((content) => (
                  <div
                    className='person-details-content-cast-tv-cast-item'
                    key={content.id}
                  >
                    <Link
                      to={{
                        pathname: `/tv/${content.id}`,
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
                    <div className='person-details-content-cast-tv-cast-item-footer'>
                      <p>
                        <span className='HiClock'>
                          <HiClock />
                          {content.first_air_date &&
                            content.first_air_date.slice(0, 4)}
                        </span>
                        <span className='IoIosStar'>
                          <IoIosStar />
                          {content.vote_average.toFixed(1) || 0}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        ) : null}

        <div className='person-details-content-reviews'>
          <div className='person-details-content-reviews-header'>
            <h2 className='person-details-content-reviews-title'>COMMENTS</h2>
          </div>
          <div className='person-details-content-reviews-content'>
            <div className='person-details-content-review-item'>
              <p className='person-details-content-review-item-content'>
                There are no comments for this person.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return <>{content}</>;
};

export default DetailsPerson;
