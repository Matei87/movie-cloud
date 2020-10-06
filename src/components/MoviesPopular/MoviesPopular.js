import React, { useContext } from 'react';
import './MoviesPopular.css';
import MovieContext from '../../context/MovieContext';

const MoviesPopular = () => {
    const { multiSearch, moviesPopular, moviesTopRated, moviesNowPlaying, moviesUpcoming,
        tvAiringToday, tvPopular, tvOnTheAir, tvTopRated
    } = useContext(MovieContext);

    return (
        <div>
            {/* {console.log(multiSearch, moviesPopular, moviesTopRated, moviesNowPlaying,
                moviesUpcoming, moviesTrendingWeek, moviesTrendingDay,
                tvAiringToday, tvPopular, tvOnTheAir, tvTopRated, tvTrendingWeek, tvTrendingDay
            )} */}
        </div>
    )
}

export default MoviesPopular;
