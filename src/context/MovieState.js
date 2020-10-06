import React, { useEffect, useReducer, useState } from 'react';
import MovieContext from './MovieContext';
import MovieReducer from './MovieReducer';


//state of the cotext
const MovieState = (props) => {
    const initialstate = {
        multiSearch: [],

        moviesPopular: [],
        moviesTopRated: [],
        moviesNowPlaying: [],
        moviesUpcoming: [],
        moviesTrendingWeek: [],
        moviesTrendingDay: [],
        // moviesGenre: [],
        // movieDetails: {},
        //movieCredits: [],
        // movieTrailers: [],
        // movieReviews: [],

        tvAiringToday: [],
        tvPopular: [],
        tvOnTheAir: [],
        tvTopRated: [],
        tvTrendingWeek: [],
        tvTrendingDay: [],

        errorMessage: null,
        type: ''
    }
    const [data, setData] = useState(initialstate);

    console.log(data)
    return (
        <MovieContext.Provider
            value={[data, setData]}
        // value={
        //     {
        //         multiSearch: data.multiSearch,

        //         moviesPopular: data.moviesPopular,
        //         moviesTopRated: data.moviesTopRated,
        //         moviesNowPlaying: data.moviesNowPlaying,
        //         moviesUpcoming: data.moviesUpcoming,
        //         moviesTrendingWeek: data.moviesTrendingWeek,
        //         moviesTrendingDay: data.moviesTrendingDay,

        //         tvAiringToday: data.tvAiringToday,
        //         tvPopular: data.tvPopular,
        //         tvOnTheAir: data.tvOnTheAir,
        //         tvTopRated: data.tvTopRated,
        //         tvTrendingWeek: data.tvTrendingWeek,
        //         tvTrendingDay: data.tvTrendingDay,

        //         type: data.type,
        //         data: data,
        //         setData: data.setData,
        //         errorMessage: data.errorMessage,

        //         // fetchMoviesPopular,
        //         // fetchMoviesTopRated,
        //         // fetchMoviesNowPlaying,
        //         // fetchMoviesUpcoming,

        //         // fetchTvAiringToday,
        //         // fetchTvPopular,
        //         // fetchTvOnTheAir,
        //         // fetchTvTopRated,
        //         //movies1
        //     }
        // }
        >
            {props.children}
        </MovieContext.Provider>
    )
}

export default MovieState;