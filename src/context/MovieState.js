import React, { useState } from 'react';
import MovieContext from './MovieContext';

//state of the context
const MovieState = (props) => {
  const initialstate = {
    multiSearch: [],

    //movies
    moviesPopular: [],
    moviesTopRated: [],
    moviesNowPlaying: [],
    moviesUpcoming: [],

    //tv
    tvAiringToday: [],
    tvPopular: [],
    tvOnTheAir: [],
    tvTopRated: [],

    //isLoading
    loading: false,

    type: localStorage.getItem('type') || '',
  };
  const [data, setData] = useState(initialstate);

  //MOVIE URLS
  const MOVIE_URL_UPCOMING = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
  const MOVIE_URL_NOWPLAYING = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
  const MOVIE_URL_POPULAR = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
  const MOVIE_URL_TOPRATED = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;

  //TV URLS
  const TV_URL_AIRINGTODAY = `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
  const TV_URL_POPULAR = `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
  const TV_URL_ONTHEAIR = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
  const TV_URL_TOPRATED = `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;

  //SEARCH ***
  const handleSearch = async (query) => {
    try {
      const MULTISEARCH_URL = `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
      const request = await fetch(MULTISEARCH_URL);
      const response = await request.json();

      setData({ multiSearch: response.results });
    } catch (error) {
      console.log(error);
    }
  };

  //MOVIES ***
  const handleMovies = async () => {
    try {
      const request = [
        fetch(MOVIE_URL_UPCOMING),
        fetch(MOVIE_URL_NOWPLAYING),
        fetch(MOVIE_URL_POPULAR),
        fetch(MOVIE_URL_TOPRATED),
      ];
      const response = await Promise.all(request);
      const data = await Promise.all(response.map((res) => res.json()));

      setData({
        moviesUpcoming: data[0].results,
        moviesNowPlaying: data[1].results,
        moviesPopular: data[2].results,
        moviesTopRated: data[3].results,
        type: localStorage.setItem('type', 'movie') || 'movie',
        loading: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //TV ***
  const handleTV = async () => {
    try {
      const request = [
        fetch(TV_URL_AIRINGTODAY),
        fetch(TV_URL_POPULAR),
        fetch(TV_URL_ONTHEAIR),
        fetch(TV_URL_TOPRATED),
      ];
      const response = await Promise.all(request);
      const data = await Promise.all(response.map((res) => res.json()));
  
      setData({
        tvAiringToday: data[0].results,
        tvPopular: data[1].results,
        tvOnTheAir: data[2].results,
        tvTopRated: data[3].results,
        type: localStorage.setItem('type', 'tv') || 'tv',
        loading: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MovieContext.Provider
      value={{
        multiSearch: data.multiSearch,
        //all

        //movies
        moviesPopular: data.moviesPopular,
        moviesTopRated: data.moviesTopRated,
        moviesNowPlaying: data.moviesNowPlaying,
        moviesUpcoming: data.moviesUpcoming,

        //tv
        tvAiringToday: data.tvAiringToday,
        tvPopular: data.tvPopular,
        tvOnTheAir: data.tvOnTheAir,
        tvTopRated: data.tvTopRated,

        type: data.type,

        loading: data.loading,

        handleMovies,
        handleTV,
        handleSearch,
        data,
        setData,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieState;
