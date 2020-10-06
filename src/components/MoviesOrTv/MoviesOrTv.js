import React, { useContext, useState, useEffect } from 'react';
import './MoviesOrTv.css';
import MovieContext from '../../context/MovieContext';

const MoviesOrTv = () => {
    const { data, fetchMoviesUpcoming, fetchMoviesPopular, fetchMoviesNowPlaying, fetchMoviesTopRated,
        fetchTvAiringToday, fetchTvPopular, fetchTvOnTheAir, fetchTvTopRated } = useContext(MovieContext);
    const { type, moviesUpcoming, moviesPopular, moviesNowPlaying, moviesTopRated,
        tvAiringToday, tvPopular, tvOnTheAir, tvTopRated } = data;
    const [itemType, setItemType] = useState(type);
    useEffect(() => {
        // if (type === 'movie') {
        //     //console.log('movie');
        //     handleMovies();
        //     // fetchMoviesUpcoming();
        //     // fetchMoviesPopular();
        //     // fetchMoviesNowPlaying();
        //     // fetchMoviesTopRated();
        // }
        // if (type === 'tv'); {
        //     handleTv();
        //     //console.log('tv');
        //     // fetchTvAiringToday();
        //     // fetchTvPopular();
        //     // fetchTvOnTheAir();
        //     // fetchTvTopRated();
        // }
        fetchMoviesUpcoming();
        fetchMoviesPopular();
        fetchMoviesNowPlaying();
        fetchMoviesTopRated();
        fetchTvAiringToday();
        fetchTvPopular();
        fetchTvOnTheAir();
        fetchTvTopRated();
    }, [])
    const handleMovies = () => {
        fetchMoviesUpcoming();
        fetchMoviesPopular();
        fetchMoviesNowPlaying();
        fetchMoviesTopRated();
    }

    const handleTv = () => {
        fetchTvAiringToday();
        fetchTvPopular();
        fetchTvOnTheAir();
        fetchTvTopRated();
    }

    console.log(type, moviesUpcoming, moviesPopular, moviesNowPlaying, moviesTopRated,
        tvAiringToday, tvPopular, tvOnTheAir, tvTopRated)
    return (
        <div className="MoviesOrTv">
            <button className={` btn btn-outline-primary ${type === 'movie' ? 'btn-selected' : null}`}
                onClick={() => {
                    fetchMoviesUpcoming();
                    fetchMoviesPopular();
                    fetchMoviesNowPlaying();
                    fetchMoviesTopRated();
                }}
            >
                MOVIES
            </button>
            <button className={` btn btn-outline-primary ${type === 'tv' ? 'btn-selected' : null}`}
                onClick={() => {
                    fetchTvAiringToday();
                    fetchTvPopular();
                    fetchTvOnTheAir();
                    fetchTvTopRated();
                }}
            >
                TV SHOWS
            </button>
        </div>
    )
}

export default MoviesOrTv;