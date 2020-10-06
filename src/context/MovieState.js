import React, { useEffect, useReducer, useState } from 'react';
import MovieContext from './MovieContext';
import MovieReducer from './MovieReducer';
import axios from 'axios';

//state of the cotext
const MovieState = (props) => {
    const [data, setData] = useState(
        {
            ismultiSearch: false,
            multiSearch: [],

            ismoviesPopular: false,
            moviesPopular: [],
            ismoviesTopRated: false,
            moviesTopRated: [],
            ismoviesNowPlaying: false,
            moviesNowPlaying: [],
            ismoviesUpcoming: false,
            moviesUpcoming: [],
            ismoviesTrendingWeek: false,
            moviesTrendingWeek: [],
            ismoviesTrendingDay: false,
            moviesTrendingDay: [],
            // moviesGenre: [],
            // movieDetails: {},
            //movieCredits: [],
            // movieTrailers: [],
            // movieReviews: [],

            istvAiringToday: false,
            tvAiringToday: [],
            istvPopular: false,
            tvPopular: [],
            istvOnTheAir: false,
            tvOnTheAir: [],
            istvTopRated: false,
            tvTopRated: [],
            istvTrendingWeek: false,
            tvTrendingWeek: [],
            istvTrendingDay: false,
            tvTrendingDay: [],

            errorMessage: null,
            type: ''
        }
    )
    const API_KEY = 'd2f90b385fa2430163392784263021de';
    const POSTER = 'https://image.tmdb.org/t/p/original';
    const MOVIE_BACKDROP = 'https://image.tmdb.org/t/p/w1280';
    const profil = 'http://image.tmdb.org/t/p/w300';

    //MULTI SEARCH
    const MULTISEARCH_URL = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=brad pitt&page=1&include_adult=false;`
    //MOVIE URLS
    const MOVIE_URL_DEFAULT = `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`;
    const MOVIE_URL_UPCOMING = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
    const MOVIE_URL_NOWPLAYING = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
    const MOVIE_URL_POPULAR = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    const MOVIE_URL_TOPRATED = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
    //MOVIE TRENDING URLS
    const MOVIE_URL_TRENDINGWEEK = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=en-US&page=1`;
    const MOVIE_URL_TRENDINGDAY = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en-US&page=1`;

    //TV URLS
    const TV_URL_AIRINGTODAY = `https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`;
    const TV_URL_POPULAR = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`;
    const TV_URL_ONTHEAIR = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`;
    const TV_URL_TOPRATED = `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
    //TV TRENDING URLS
    const TV_URL_TRENDINGWEEK = `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}&language=en-US&page=1`;
    const TV_URL_TRENDINGDAY = `https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}&language=en-US&page=1`;

    //PEOPLE URLS
    const PEOPLE_URL_DETAILS = `https://api.themoviedb.org/3/person/{person_id}?api_key=${API_KEY}&language=en-US`;
    const PEOPLE_URL_MOVIECREDITS = `https://api.themoviedb.org/3/person/{person_id}/movie_credits?api_key=${API_KEY}&language=en-US`;
    const PEOPLE_URL_TVCREDITS = `https://api.themoviedb.org/3/person/{person_id}/tv_credits?api_key=${API_KEY}&language=en-US`;

    useEffect(() => {
        fetchMoviesPopular();
        fetchMoviesTopRated();
        fetchTvAiringToday();
    }, [])

    const multisearch = async () => {
        try {
            const request = await axios.get(MULTISEARCH_URL);
            //const response = await request;
            setData({ multiSearch: request.data.results, ismultiSearch: true });
        } catch (error) {
            setData({ errorMessage: error });
        }
        // axios.get(MULTISEARCH_URL)
        //     .then(res => setData({ multiSearch: res.data.results }))
        //     .catch(error => setData({ errorMessage: error }));
    }
    //MOVIES ***
    //MOVIES POPULAR
    const fetchMoviesPopular = async () => {
        try {
            const request = await axios.get(MOVIE_URL_POPULAR);
            //const response = await request;
            setData({ moviesPopular: request.data.results, ismoviesPopular: true, type: 'movie' });
        } catch (error) {
            setData({ errorMessage: error });
        }
        // axios.get(MOVIE_URL_POPULAR)
        //     .then(res => setData({ moviesPopular: res.data.results, type: 'movie' }))
        //     .catch(error => setData({ errorMessage: error }));
    }
    //MOVIE_URL_TOPRATED
    const fetchMoviesTopRated = async () => {
        try {
            const request = await axios.get(MOVIE_URL_TOPRATED);
            //const response = request;
            setData({ moviesTopRated: request.data.results, ismoviesTopRated: true, type: 'movie' });
        } catch (error) {
            setData({ errorMessage: error });
        }
        // axios.get(MOVIE_URL_TOPRATED)
        //     .then(res => setData({ moviesTopRated: res.data.results, type: 'movie' }))
        //     .catch(error => setData({ errorMessage: error }));
    }
    //MOVIE_URL_NOWPLAYING
    const fetchMoviesNowPlaying = async () => {
        try {
            const request = await axios.get(MOVIE_URL_NOWPLAYING);
            //const response = await request;
            setData({ moviesNowPlaying: request.data.results, ismoviesNowPlaying: true, type: 'movie' });
        } catch (error) {
            setData({ errorMessage: error });
        }
        // axios.get(MOVIE_URL_NOWPLAYING)
        //     .then(res => setData({ moviesNowPlaying: res.data.results, type: 'movie' }))
        //     .catch(error => setData({ errorMessage: error }));
    }
    //MOVIE_URL_UPCOMING
    const fetchMoviesUpcoming = async () => {
        try {
            const request = await axios.get(MOVIE_URL_UPCOMING);
            //const response = await request;
            setData({ moviesUpcoming: request.data.results, ismoviesUpcoming: true, type: 'movie' });
        } catch (error) {
            setData({ errorMessage: error });
        }
        // axios.get(MOVIE_URL_UPCOMING)
        //     .then(res => setData({ moviesUpcoming: res.data.results, type: 'movie' }))
        //     .catch(error => setData({ errorMessage: error }));
    }
    // //MOVIE_URL_TRENDINGWEEK
    const fetchMoviesTrendingWeek = async () => {
        try {
            const request = await axios.get(MOVIE_URL_TRENDINGWEEK);
            //const response = await request;
            setData({ moviesTrendingWeek: request.data.results, ismoviesTrendingWeek: true, type: 'movie' });
        } catch (error) {
            setData({ errorMessage: error });
        }
        // axios.get(MOVIE_URL_TRENDINGWEEK)
        //     .then(res => setData({ moviesTrendingWeek: res.data.results, type: 'movie' }))
        //     .catch(error => setData({ errorMessage: error }));
    }
    // //MOVIE_URL_TRENDINGDAY
    const fetchMoviesTrendingDay = async () => {
        try {
            const request = await axios.get(MOVIE_URL_TRENDINGDAY);
            //const response = await request;
            setData({ moviesTrendingDay: request.data.results, ismoviesTrendingDay: true, type: 'movie' });
        } catch (error) {
            setData({ errorMessage: error });
        }
        // axios.get(MOVIE_URL_TRENDINGDAY)
        //     .then(res => setData({ moviesTrendingDay: res.data.results, type: 'movie' }))
        //     .catch(error => setData({ errorMessage: error }));
    }

    //TV ***
    //TV_URL_AIRINGTODAY
    const fetchTvAiringToday = async () => {
        try {
            const request = await axios.get(TV_URL_AIRINGTODAY);
            //const response = await request;
            setData({ tvAiringToday: request.data.results, istvAiringToday: true, type: 'tv' });
        } catch (error) {
            setData({ errorMessage: error });
        }
        // axios.get(TV_URL_AIRINGTODAY)
        //     .then(res => setData({ tvAiringToday: res.data.results, type: 'tv' }))
        //     .catch(error => setData({ errorMessage: error }));
    }
    //TV_URL_POPULAR
    const fetchTvPopular = async () => {
        try {
            const request = await axios.get(TV_URL_POPULAR);
            //const response = await request;
            setData({ tvPopular: request.data.results, istvPopular: true, type: 'tv' });
        } catch (error) {
            setData({ errorMessage: error });
        }
        // axios.get(TV_URL_POPULAR)
        //     .then(res => setData({ tvPopular: res.data.results, type: 'tv' }))
        //     .catch(error => setData({ errorMessage: error }));
    }
    //TV_URL_ONTHEAIR
    const fetchTvOnTheAir = async () => {
        try {
            const request = await axios.get(TV_URL_ONTHEAIR);
            //const response = await request;
            setData({ tvOnTheAir: request.data.results, istvOnTheAir: true, type: 'tv' });
        } catch (error) {
            setData({ errorMessage: error });
        }
        // axios.get(TV_URL_ONTHEAIR)
        //     .then(res => setData({ tvOnTheAir: res.data.results, type: 'tv' }))
        //     .catch(error => setData({ errorMessage: error }));
    }
    //TV_URL_TOPRATED
    const fetchTvTopRated = async () => {
        try {
            const request = await axios.get(TV_URL_TOPRATED);
            //const response = await request;
            setData({ tvTopRated: request.data.results, istvTopRated: true, type: 'tv' });
        } catch (error) {
            setData({ errorMessage: error });
        }
        // axios.get(TV_URL_TOPRATED)
        //     .then(res => setData({ tvTopRated: res.data.results, type: 'tv' }))
        //     .catch(error => setData({ errorMessage: error }));
    }
    //TV_URL_TRENDINGWEEK
    const fetchTvTrendingWeek = async () => {
        try {
            const request = await axios.get(TV_URL_TRENDINGWEEK);
            //const response = await request;
            setData({ tvTrendingWeek: request.data.results, istvTrendingWeek: true, type: 'tv' });
        } catch (error) {
            setData({ errorMessage: error });
        }
        // axios.get(TV_URL_TRENDINGWEEK)
        //     .then(res => setData({ tvTrendingWeek: res.data.results, type: 'tv' }))
        //     .catch(error => setData({ errorMessage: error }));
    }
    //TV_URL_TRENDINGDAY
    const fetchTvTrendingDay = async () => {
        try {
            const request = await axios.get(TV_URL_TRENDINGDAY);
            //const response = await request;
            setData({ tvTrendingDay: request.data.results, istvTrendingDay: true, type: 'tv' });
        } catch (error) {
            setData({ errorMessage: error });
        }
        // axios.get(TV_URL_TRENDINGDAY)
        //     .then(res => setData({ tvTrendingDay: res.data.results, type: 'tv' }))
        //     .catch(error => setData({ errorMessage: error }));
    }

    console.log(data)
    return (
        <MovieContext.Provider
            //value={[data, setData]}
            value={
                {
                    ismultiSearch: data.ismultiSearch,

                    ismoviesPopular: data.ismoviesPopular,
                    ismoviesTopRated: data.ismoviesTopRated,
                    ismoviesNowPlaying: data.ismoviesNowPlaying,
                    ismoviesUpcoming: data.ismoviesUpcoming,
                    ismoviesTrendingWeek: data.ismoviesTrendingWeek,
                    ismoviesTrendingDay: data.ismoviesTrendingDay,
                    istvAiringToday: data.istvAiringToday,
                    istvPopular: data.istvPopular,
                    istvOnTheAir: data.istvOnTheAir,
                    istvTopRated: data.istvTopRated,
                    istvTrendingWeek: data.istvTrendingWeek,
                    istvTrendingDay: data.istvTrendingDay,

                    multiSearch: data.multiSearch,

                    moviesPopular: data.moviesPopular,
                    moviesTopRated: data.moviesTopRated,
                    moviesNowPlaying: data.moviesNowPlaying,
                    moviesUpcoming: data.moviesUpcoming,
                    moviesTrendingWeek: data.moviesTrendingWeek,
                    moviesTrendingDay: data.moviesTrendingDay,

                    tvAiringToday: data.tvAiringToday,
                    tvPopular: data.tvPopular,
                    tvOnTheAir: data.tvOnTheAir,
                    tvTopRated: data.tvTopRated,
                    tvTrendingWeek: data.tvTrendingWeek,
                    tvTrendingDay: data.tvTrendingDay,

                    type: data.type,
                    data: data,
                    errorMessage: data.errorMessage,

                    fetchMoviesPopular,
                    fetchMoviesTopRated,
                    fetchMoviesNowPlaying,
                    fetchMoviesUpcoming,

                    fetchTvAiringToday,
                    fetchTvPopular,
                    fetchTvOnTheAir,
                    fetchTvTopRated,
                    //movies1
                }
            }
        >
            {props.children}
        </MovieContext.Provider>
    )
}

export default MovieState;