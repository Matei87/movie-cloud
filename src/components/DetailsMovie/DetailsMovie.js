import React, { useEffect, useState } from 'react';
import '../DetailsTv/DetailsTv.css';

import Loader from '../Loader/Loader';
import theatre from '../../pictures/theatre.jpg';
import pic from '../../pictures/default.png';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PICTURE = 'https://image.tmdb.org/t/p/w300';
const YOUTUBE = 'https://www.youtube.com/embed/';


const DetailsMovie = (props) => {
    const { id } = props.match.params;
    const [detailsMovie, setDetailsMovie] = useState({
        //movies
        backdrop_path_movie: '',
        poster_path_movie: '',
        genres_movie: '',
        title_movie: '',
        vote_average_movie: '',
        vote_count_movie: '',
        release_date_movie: '',
        runtime_movie: '',
        original_language_movie: '',
        tagline: '',
        overview_movie: '',

        //cast
        cast: [],

        //trailers
        trailers: [],

        //reviews
        reviews: [],

        //loading
        loading: false

    });

    const fetchDetails = async () => {
        const urlMovieReviews = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
        const urlMovieVideo = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
        const urlMovieCast = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}`;
        const urlMovie = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
        const request = [
            fetch(urlMovie),
            fetch(urlMovieCast),
            fetch(urlMovieVideo),
            fetch(urlMovieReviews)
        ];
        const response = await Promise.all(request);
        const data = await Promise.all(response.map(res => res.json()));
        //console.log(data);
        setDetailsMovie({
            backdrop_path_movie: data[0].backdrop_path, genres_movie: data[0].genres,
            title_movie: data[0].title, tagline: data[0].tagline, vote_average_movie: data[0].vote_average, vote_count_movie: data[0].vote_count,
            release_date_movie: data[0].release_date, runtime_movie: data[0].runtime, original_language_movie: data[0].original_language,
            overview_movie: data[0].overview, poster_path_movie: data[0].poster_path, cast: data[1].cast, trailers: data[2].results,
            reviews: data[3].results, loading: true
        });
    }

    useEffect(() => {
        fetchDetails();
    }, []);


    const { backdrop_path_movie, genres_movie, title_movie, vote_average_movie, vote_count_movie, release_date_movie,
        runtime_movie, original_language_movie, tagline, overview_movie, poster_path_movie, cast, trailers, reviews, loading } = detailsMovie;

    let genMovie = [];
    if (genres_movie) {
        for (let genre of genres_movie) {
            genMovie.push(genre['name'])
        }
    }
    let finishMovie = genMovie.slice(0, 2).join(' | ');

    let backgroundMovie = backdrop_path_movie || poster_path_movie;

    const slicedTrailers = trailers.slice(0, 3);

    //console.log(trailers);
    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: cast.length > 6 ? 6 : cast.length,
        slidesToScroll: 1,
        autoplay: false,
        speed: 3000,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const settingsvideo = {
        dots: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        speed: 3000,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: trailers.length > 2 ? 2 : trailers.length,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: trailers.length > 2 ? 2 : trailers.length,
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

    let content;

    if (tagline === '' || tagline) {
        content = (
            <div id="details">

                < div className="details-header">
                    <div className="details-header-image">
                        <img src={backgroundMovie === null ? theatre : 'https://image.tmdb.org/t/p/w1280' + backgroundMovie}
                            alt={title_movie} />
                    </div>
                    <div className="details-header-details">
                        <span className="details-header-details-title">{title_movie}</span>
                        <span className="details-header-details-genres">{finishMovie}</span>
                        <span className="details-header-details-runtime-rating">
                            {release_date_movie ? <>{(release_date_movie).split('-').reverse().join('/')} | </> : null}
                            {runtime_movie ? <>{runtime_movie} mins | </> : null}
                            {original_language_movie ? <>{(original_language_movie).toUpperCase()} | </> : null}
                            {vote_average_movie ? vote_average_movie : null} {vote_count_movie ? <>{`(${vote_count_movie})`}</> : null}
                        </span>
                        <span className="details-header-details-tagline">{tagline || ''}</span>
                    </div>
                </div>

                <div className="details-content container">
                    {overview_movie.length > 0 ? <div className="details-content-overview">
                        <h2 className="details-content-overview-title">OVERVIEW</h2>
                        <p className="details-content-overview-content">
                            {overview_movie}
                        </p>
                    </div> : null}

                    {cast.length > 0 ? <div className="details-content-cast">
                        <div className="details-content-cast-header">
                            <h2 className="details-content-cast-title">CAST</h2>
                        </div>
                        <div className="details-content-cast-content">
                            <Slider {...settings}>
                                {cast.map(content =>

                                    <div className="details-content-cast-item" key={content.id}>
                                        <Link to={{
                                            pathname: `/details/person/${content.id}`,
                                            state: { id: content.id }
                                        }}>
                                            <img src={content.profile_path === null ? pic : (PICTURE + content.profile_path)} alt={content.name} />
                                        </Link>
                                        <div className="details-content-cast-item-footer">
                                            <p>{content.name}</p>
                                        </div>
                                    </div>
                                )}
                            </Slider>
                        </div>
                    </div> : null}

                    {trailers.length > 0 ? <div className="details-content-trailers">
                        <div className="details-content-trailers-header">
                            <h2 className="details-content-trailers-title">TRAILERS</h2>
                        </div>
                        <div className="details-content-trailers-content">
                            <Slider {...settingsvideo}>
                                {slicedTrailers.map(content =>
                                    <div className="details-content-trailers-item" key={content.key}>
                                        <iframe src={YOUTUBE + content.key} title={content.key} />
                                    </div>
                                )}
                            </Slider>
                        </div>
                    </div> : null}

                    {reviews.length > 0 ? <div className="details-content-reviews">
                        <div className="details-content-reviews-header">
                            <h2 className="details-content-reviews-title">REVIEWS</h2>
                        </div>
                        <div className="details-content-reviews-content">
                            {reviews.map(review => (
                                <div className="details-content-review-item" key={review.author}>
                                    <h4 className="details-content-review-item-title">{review.author}</h4>
                                    <p className="details-content-review-item-content">{review.content.length > 300 ? (review.content).slice(0, 300) : review.content}...</p>
                                    <a href={review.url}>View full review</a>
                                </div>
                            ))}
                        </div>
                    </div> : <div className="details-content-reviews">
                            <div className="details-content-reviews-header">
                                <h2 className="details-content-reviews-title">REVIEWS</h2>
                            </div>
                            <div className="details-content-reviews-content">
                                <div className="details-content-review-item">
                                    <p className="details-content-review-item-content">There are no reviews for this movie.</p>
                                </div>
                            </div>
                        </div>}

                </div>
            </div>
        );
    }

    return (<>{loading === false ? <Loader /> : content}</>)
}

export default DetailsMovie;