import React from 'react';

import Header from '../Header/Header';
import MoviesController from '../MoviesController/MoviesController';
import MovieTvContainer from '../MovieTvContainer/MovieTvContainer';

const Homepage = () => {
  return (
    <>
      <Header />
      <MoviesController />
      <MovieTvContainer />
    </>
  );
};

export default Homepage;
