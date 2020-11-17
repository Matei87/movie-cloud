import React, { useEffect, useState } from 'react';
import './DetailsTv.css';

import theatre from '../../pictures/theatre.jpg';
import pic from '../../pictures/default.png';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const DetailsTv = (props) => {
    const { id } = props.match.params;
    const [detailsTv, setDetailsTv] = useState({
        //tv
        backdrop_path_tv: '',
        poster_path_tv: '',
        genres_tv: '',
        title_tv: '',
        vote_average_tv: '',
        vote_count_tv: '',
        original_language_tv: '',
        episode_run_time_tv: '',
        first_air_date_tv: '',
        overview_tv: '',
        taglineTV: '',

        //cast
        cast: [],

        //trailers
        trailers: [],

        //reviews
        reviews: [],

        //loading
        loading: false

    });
    useEffect(() => {
        fetchDetailsTv();
    }, []);

    const fetchDetailsTv = async () => {
        const urlTvReviews = `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
        const urlTvVideo = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
        const urlTvCast = `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
        const urlTv = `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;

        const request = [
            fetch(urlTv),
            fetch(urlTvCast),
            fetch(urlTvVideo),
            fetch(urlTvReviews)
        ];
        const response = await Promise.all(request);
        const data = await Promise.all(response.map(res => res.json()));
        //console.log(data[0]);
        setDetailsTv({
            backdrop_path_tv: data[0].backdrop_path, genres_tv: data[0].genres, episode_run_time_tv: data[0].episode_run_time,
            title_tv: data[0].name, vote_average_tv: data[0].vote_average, vote_count_tv: data[0].vote_count,
            first_air_date_tv: data[0].first_air_date, original_language_tv: data[0].original_language, overview_tv: data[0].overview,
            poster_path_tv: data[0].poster_path, taglineTV: data[0].tagline, cast: data[1].cast, trailers: data[2].results,
            reviews: data[3].results, loading: true
        });
    };

    const { backdrop_path_tv, genres_tv, title_tv, vote_average_tv, vote_count_tv, original_language_tv,
        episode_run_time_tv, first_air_date_tv, overview_tv, poster_path_tv, taglineTV, cast, trailers, reviews, loading } = detailsTv;


    let genTv = [];
    if (genres_tv) {
        for (let genre of genres_tv) {
            genTv.push(genre['name']);
        }
    }
    let finishTv = genTv.slice(0, 2).join(' | ');

    let backgroundTv = backdrop_path_tv || poster_path_tv;

    //console.log(reviews);
    const slicedTrailers = trailers.slice(0, 3);

    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 6,
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

    //console.log(taglineTV);
    let content;
    if (taglineTV === '' || taglineTV) {
        content = (
            <div id="details">

                < div className="details-header">
                    <div className="details-header-image">
                        <img src={backgroundTv === null ? theatre : 'https://image.tmdb.org/t/p/w1280' + backgroundTv}
                            alt={title_tv} />
                    </div>
                    <div className="details-header-details">
                        <span className="details-header-details-title">{title_tv}</span>
                        <span className="details-header-details-genres">{finishTv}</span>
                        <span className="details-header-details-runtime-rating">
                            {first_air_date_tv ? <>{(first_air_date_tv).split('-').reverse().join('/')} | </> : null}
                            {episode_run_time_tv.length > 0 ? <>{`${(episode_run_time_tv).slice(0, 1)} mins | `}</> : null}
                            {original_language_tv ? <>{`${(original_language_tv).toUpperCase()} | `}</> : null}
                            {vote_average_tv ? vote_average_tv : null} {vote_count_tv ? <>{`(${vote_count_tv})`}</> : null}
                        </span>
                    </div>
                </div>

                <div className="details-content container">
                    {overview_tv.length > 0 ? <div className="details-content-overview">
                        <h2 className="details-content-overview-title">OVERVIEW</h2>
                        <p className="details-content-overview-content">
                            {overview_tv}
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
                                            <img src={content.profile_path === null ? pic : 'https://image.tmdb.org/t/p/w300' + content.profile_path} alt={content.name} />
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
                                        <iframe src={`https://www.youtube.com/embed/${content.key}`} title={content.key} />
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
                                <div className="details-content-review-item" key={review.url}>
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
                                    <p className="details-content-review-item-content">There are no reviews for this TV Show.</p>
                                </div>
                            </div>
                        </div>}
                </div>

            </div >
        );
    }

    return (<>{content}</>)
}

export default DetailsTv;