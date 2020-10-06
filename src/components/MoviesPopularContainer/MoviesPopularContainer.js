import React, { useContext } from 'react';
import MovieContext from '../../context/MovieContext';


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

const MoviesPopularContainer = (props) => {
    const { data, fetchMoviesPopular, errorMessage } = useContext(MovieContext);
    const { moviesUpcoming, moviesPopular, moviesNowPlaying, moviesTopRated,
        tvAiringToday, tvPopular, tvOnTheAir, tvTopRated, type } = data;
    // console.log(moviesPopular)
    const MOVIE_BACKDROP = 'https://image.tmdb.org/t/p/w1280';
    console.log('moviesPopular', moviesPopular)
    let content;
    if (type === 'movie') {
        content = (
            <>
                <Slider {...settings}
                    className='main_container'
                >
                    <div className='container-header'>
                        <h2 className='container-header--title'>{props.title}</h2>
                        <div className='container-arrow'>
                        </div>
                        <div className="container-content">
                            {console.log(moviesPopular)}
                            {<> {moviesPopular.map(content => <p>{content.title}</p>)} </>}
                        </div>
                    </div>
                </Slider>
            </>
        )
    }
    return (

        <>{content}</>
    )
}

export default MoviesPopularContainer;