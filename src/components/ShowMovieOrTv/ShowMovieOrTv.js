import React, { useContext, useEffect } from 'react';
import './ShowMovieOrTv.css';
import MovieContext from '../../context/MovieContext';
import MoviesUpcomingContainer from '../MoviesUpcomingContainer/MoviesUpcomingContainer';
//import MoviesPopularContainer from '../MoviesPopularContainer/MoviesPopularContainer';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    speed: 3000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
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


const ShowMovieOrTv = () => {
    const { data, fetchMoviesUpcoming, fetchMoviesPopular, fetchMoviesNowPlaying, fetchMoviesTopRated,
        fetchTvAiringToday, fetchTvPopular, fetchTvOnTheAir, fetchTvTopRated } = useContext(MovieContext);

    const { moviesUpcoming, moviesPopular, moviesNowPlaying, moviesTopRated,
        tvAiringToday, tvPopular, tvOnTheAir, tvTopRated, type, errorMessage } = data;

    console.log(type);
    let content;
    if (type === 'movies') {
        content = (
            <>
                {/* <MoviesUpcomingContainer title="Upcoming Movie" /> */}
                <Slider {...settings}
                    className='main_container'
                >
                    <div className='container-header'>
                        <h2 className='container-header--title'>Upcoming Movie</h2>
                        <div className='container-arrow'>
                        </div>
                        <div className="container-content">
                            {console.log('moviesUpcoming', moviesUpcoming)}
                            {moviesUpcoming && moviesUpcoming.map(content => <p>{content.title}</p>)}
                        </div>
                    </div>
                </Slider>
                <Slider {...settings}>
                    <div className='container-header'>
                        <h2 className='container-header--title'>Popular Movie</h2>
                        <div className='container-arrow'>
                        </div>
                        <div className="container-content">
                            {console.log('moviesPopular', moviesPopular)}
                            {moviesPopular && moviesPopular.map(content => <p>{content.title}</p>)}
                        </div>
                    </div>
                </Slider >
                <Slider {...settings}
                    className='main_container'
                >
                    <div className='container-header'>
                        <h2 className='container-header--title'>Now Playing</h2>
                        <div className='container-arrow'>
                        </div>
                        <div className="container-content">
                            {console.log('moviesNowPlaying', moviesNowPlaying)}
                            {moviesNowPlaying && moviesNowPlaying.map(content => <p>{content.title}</p>)}
                        </div>
                    </div>
                </Slider>
                <Slider {...settings}>
                    <div className='container-header'>
                        <h2 className='container-header--title'>Top Rated</h2>
                        <div className='container-arrow'>
                        </div>
                        <div className="container-content">
                            {console.log('moviesTopRated', moviesTopRated)}
                            {moviesTopRated && moviesTopRated.map(content => <p>{content.title}</p>)}
                        </div>
                    </div>
                </Slider >
                {/* <MoviesPopularContainer title="Popular Movie" /> */}
                {/* <MainPageContainer title="Now Playing" contentType={moviesNowPlaying} /> */}
                {/* <MainPageContainer title="Top Rated" contentType={moviesTopRated} /> */}

            </>
        )
    }

    else if (type === 'tv') {
        content = (
            <>
                {/* <MainPageContainer title="Airing Today TV" contentType={tvAiringToday} /> */}
                {/* <MainPageContainer title="Popular TV" contentType={tvPopular} /> */}
                {/* <MainPageContainer title="On The Air TV" contentType={tvOnTheAir} /> */}
                {/* <MainPageContainer title="Top Rated TV" contentType={tvTopRated} /> */}
                <Slider {...settings}
                    className='main_container'
                >
                    <div className='container-header'>
                        <h2 className='container-header--title'>Airing Today TV</h2>
                        <div className='container-arrow'>
                        </div>
                        <div className="container-content">
                            {console.log('tvAiringToday', tvAiringToday)}
                            {tvAiringToday && tvAiringToday.map(content => <p>{content.title}</p>)}
                        </div>
                    </div>
                </Slider>
                <Slider {...settings}>
                    <div className='container-header'>
                        <h2 className='container-header--title'>Popular TV</h2>
                        <div className='container-arrow'>
                        </div>
                        <div className="container-content">
                            {console.log('tvPopular', tvPopular)}
                            {tvPopular && tvPopular.map(content => <p>{content.title}</p>)}
                        </div>
                    </div>
                </Slider >
                <Slider {...settings}
                    className='main_container'
                >
                    <div className='container-header'>
                        <h2 className='container-header--title'>On The Air TV</h2>
                        <div className='container-arrow'>
                        </div>
                        <div className="container-content">
                            {console.log('tvOnTheAir', tvOnTheAir)}
                            {tvOnTheAir && tvOnTheAir.map(content => <p>{content.title}</p>)}
                        </div>
                    </div>
                </Slider>
                <Slider {...settings}>
                    <div className='container-header'>
                        <h2 className='container-header--title'>Top Rated TV</h2>
                        <div className='container-arrow'>
                        </div>
                        <div className="container-content">
                            {console.log('tvTopRated', tvTopRated)}
                            {tvTopRated && tvTopRated.map(content => <p>{content.title}</p>)}
                        </div>
                    </div>
                </Slider >
            </>
        );
    }
    //console.log(content)
    //console.log(moviesUpcoming, moviesPopular)
    return (
        <div className="content">{content}</div>
    )
}

export default ShowMovieOrTv;