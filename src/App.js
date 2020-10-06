import React, { useContext } from 'react';
import MovieState from './context/MovieState';
import MoviesPopular from './components/MoviesPopular/MoviesPopular';
import MoviesOrTv from './components/MoviesOrTv/MoviesOrTv';
import ShowMovieOrTv from './components/ShowMovieOrTv/ShowMovieOrTv';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js'



const App = () => {
  return (
    <MovieState>
      <Navbar />
      <MoviesPopular />
      <MoviesOrTv />
      <ShowMovieOrTv />
      <Footer />
    </MovieState>
  );
}

export default App;
