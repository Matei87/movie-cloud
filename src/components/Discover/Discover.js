import React, { useEffect, useState } from 'react';
import './Discover.css';

import { Link } from 'react-router-dom';
import { IoIosTrendingUp, IoIosPlay, IoIosTrophy, IoIosStar } from "react-icons/io";
import { HiClock } from "react-icons/hi";

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Discover = () => {
    const [data, setData] = useState({
        all: [],
        movieTrendingWeek: [],
        tvTrendingWeek: [],
        tvTrendingDay: []
    })

    //MOVIE TRENDING URLS
    const MOVIE_TRENDINGWEEK = `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
    //TV TRENDING URLS
    const TV_TRENDINGWEEK = `https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
    const TV_TRENDINGDAY = `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;

    // ALL ***
    const handleAll = async () => {
        try {
            const request = [
                fetch(MOVIE_TRENDINGWEEK),

                fetch(TV_TRENDINGWEEK),
                fetch(TV_TRENDINGDAY),
            ];
            const response = await Promise.all(request);
            const data = await Promise.all(response.map(res => res.json()));
            //console.log(data);
            setData({
                movieTrendingWeek: data[0].results,
                tvTrendingWeek: data[1].results, tvTrendingDay: data[2].results
            });
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        handleAll();
    }, []);

    const sets = {
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 3000,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const { movieTrendingWeek, tvTrendingWeek, tvTrendingDay } = data;

    return (
        <div id="discover">

            <div className="discover-trends">
                <div className="discover-trends-movies">

                    <div className='discover-trends-movies-main_container'>

                        <div className='discover-trends-movies-container-header'>
                            <span>MOVIES TRENDING THIS WEEK</span>
                            <span>
                                <Link to="/discover/movie/trending-week">
                                    SEE MORE
                    </Link>
                            </span>
                        </div>

                        <div className="discover-trends-movies-container-content">
                            <Slider {...sets}>
                                {movieTrendingWeek.map(content =>
                                    <div className="discover-trends-movies-container-item" key={content.id}>
                                        <img src={`https://image.tmdb.org/t/p/w1280${content.backdrop_path || content.poster_path}`} alt={content.title} />

                                        <div className="discover-trends-movies-container-item-content">
                                            <Link to={{
                                                pathname: `/details/movie/${content.id}`,
                                                state: { id: content.id }
                                            }}>
                                                <img src={'https://image.tmdb.org/t/p/w300' + content.poster_path} alt={content.title} />
                                            </Link>
                                            <div className="discover-trends-movies-item-footer">
                                                <p>
                                                    {content.release_date ? <span className="HiClock"><HiClock /> {(content.release_date).slice(0, 4)}</span> : null}
                                                    {content.vote_average ? <span className="IoIosStar"><IoIosStar /> {((content.vote_average || 0))}</span> : null}
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                )}
                            </Slider>
                        </div>

                    </div>
                </div>

                <div className="discover-trends-tv">
                    <div className='discover-trends-tv-main_container'>

                        <div className='discover-trends-tv-container-header'>
                            <span>TV SHOWS TRENDING THIS WEEK</span>
                            <span>
                                <Link to="/discover/tv/trending-week">
                                    SEE MORE
                    </Link>
                            </span>
                        </div>

                        <div className="discover-trends-tv-container-content">
                            <Slider {...sets}>
                                {tvTrendingWeek.map(content =>
                                    <div className="discover-trends-tv-container-item" key={content.id}>
                                        <img src={`https://image.tmdb.org/t/p/w1280${content.backdrop_path || content.poster_path}`} alt={content.name} />

                                        <div className="discover-trends-tv-container-item-content">
                                            <Link to={{
                                                pathname: `/details/tv/${content.id}`,
                                                state: { id: content.id }
                                            }}>
                                                <img src={'https://image.tmdb.org/t/p/w300' + content.poster_path} alt={content.name} />
                                            </Link>
                                            <div className="discover-trends-tv-item-footer">
                                                <p>
                                                    {content.first_air_date ? <span className="HiClock"><HiClock /> {(content.first_air_date).slice(0, 4)}</span> : null}
                                                    {content.vote_average ? <span className="IoIosStar"><IoIosStar /> {((content.vote_average || 0))}</span> : null}
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                )}
                            </Slider>
                        </div>

                    </div>
                </div>
            </div>

            <div className="discover-all">
                <Link to="/discover/movie/upcoming" className="discover-all-item">
                    <img src="https://image.tmdb.org/t/p/w400/4gKyQ1McHa8ZKDsYoyKQSevF01J.jpg" alt="movie-upcoming" />
                    <div>
                        <HiClock />
                        <span>Upcoming Movies</span>
                    </div>
                </Link>
                <Link to="/discover/movie/popular" className="discover-all-item">
                    <img src="https://image.tmdb.org/t/p/w400/zzWGRw277MNoCs3zhyG3YmYQsXv.jpg" alt="movie-popular" />
                    <div>
                        <IoIosTrendingUp />
                        <span>Popular Movies</span>
                    </div>
                </Link>
                <Link to="/discover/movie/now-playing" className="discover-all-item">
                    <img src="https://image.tmdb.org/t/p/w400/5UkzNSOK561c2QRy2Zr4AkADzLT.jpg" alt="movie-now-playing" />
                    <div>
                        <IoIosPlay />
                        <span>Now Playing Movies</span>
                    </div>
                </Link>
                <Link to="/discover/movie/top-rated" className="discover-all-item">
                    <img src="https://image.tmdb.org/t/p/w400/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg" alt="movie-top-rated" />
                    <div>
                        <IoIosTrophy />
                        <span>Top Rated Movies</span>
                    </div>
                </Link>
                <Link to="/discover/tv/airing-today" className="discover-all-item">
                    <img src="https://image.tmdb.org/t/p/w400/adZ9ldSlkGfLfsHNbh37ZThCcgU.jpg" alt="tv-airing-today" />
                    <div>
                        <IoIosPlay />
                        <span>Airing Today TV Shows</span>
                    </div>
                </Link>
                <Link to="/discover/tv/popular" className="discover-all-item">
                    <img src="https://image.tmdb.org/t/p/w400/hTExot1sfn7dHZjGrk0Aiwpntxt.jpg" alt="tv-popular" />
                    <div>
                        <IoIosTrendingUp />
                        <span>Popular TV Shows</span>
                    </div>
                </Link>
                <Link to="/discover/tv/on-the-air" className="discover-all-item">
                    <img src="https://image.tmdb.org/t/p/w400/58PON1OrnBiX6CqEHgeWKVwrCn6.jpg" alt="tv-on-the-air" />
                    <div>
                        <HiClock />
                        <span>On The Air TV Shows</span>
                    </div>
                </Link>
                <Link to="/discover/tv/top-rated" className="discover-all-item">
                    <img src="https://image.tmdb.org/t/p/w400/92OPBZpLc82y8CzOtrQ8P9RDvIN.jpg" alt="tv-top-rated" />
                    <div>
                        <IoIosTrophy />
                        <span>Top Rated TV Shows</span>
                    </div>
                </Link>
            </div>

            <div className="discover-tvtrending">
                <div className='discover-tvtrending-main_container'>

                    <div className='discover-tvtrending-container-header'>
                        <span>TV SHOWS TRENDING TODAY</span>
                        <span>
                            <Link to="discover/tv/trending-today">
                                SEE MORE
                </Link>
                        </span>
                    </div>

                    <div className="discover-tvtrending-container-content">
                        <Slider {...sets}>
                            {tvTrendingDay.map(content =>
                                <div className="discover-tvtrending-container-item" key={content.id}>
                                    <img src={`https://image.tmdb.org/t/p/w1280${content.backdrop_path || content.poster_path}`} alt={content.name} />

                                    <div className="discover-tvtrending-container-item-content">
                                        <div className="discover-tvtrending-container-item-content-item">
                                            <Link to={{
                                                pathname: `/details/tv/${content.id}`,
                                                state: { id: content.id }
                                            }}>
                                                <img src={`https://image.tmdb.org/t/p/w1280${content.poster_path}`} alt={content.name} />
                                            </Link>
                                            <div className="discover-tvtrending-item-footer">
                                                <p>
                                                    {content.first_air_date ? <span className="HiClock"><HiClock /> {(content.first_air_date).slice(0, 4)}</span> : null}
                                                    {content.vote_average ? <span className="IoIosStar"><IoIosStar /> {((content.vote_average || 0))}</span> : null}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="discover-tvtrending-container-item-content-item-description">
                                            <span>{content.name}</span>
                                            <span>{content.overview.split(' ').length > 30 ? content.overview.split(' ').slice(0, 20).join(' ') + '.' : content.overview}</span>
                                        </div>
                                    </div>

                                </div>
                            )}
                        </Slider>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Discover;