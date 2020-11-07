import React from 'react';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import MovieState from './context/MovieState';
import Header from './components/Header/Header';
import MoviesController from './components/MoviesController/MoviesController';
import MovieTvContainer from './components/MovieTvContainer/MovieTvContainer';

import DetailsMovie from './components/DetailsMovie/DetailsMovie';
import DetailsTv from './components/DetailsTv/DetailsTv';
import DetailsPerson from './components/DetailsPerson/DetailsPerson';
import Discover from './components/Discover/Discover';
import DiscoverMoviePopular from './components/DiscoverItems/DiscoverMoviePopular';
import DiscoverMovieUpcoming from './components/DiscoverItems/DiscoverMovieUpcoming';
import DiscoverMovieTopRated from './components/DiscoverItems/DiscoverMovieTopRated';
import DiscoverMovieNowPlaying from './components/DiscoverItems/DiscoverMovieNowPlaying';
import DiscoverMovieTrendingWeek from './components/DiscoverItems/DiscoverMovieTrendingWeek';

import DiscoverTvAiringToday from './components/DiscoverItems/DiscoverTvAiringToday';
import DiscoverTvPopular from './components/DiscoverItems/DiscoverTvPopular';
import DiscoverTvOnTheAir from './components/DiscoverItems/DiscoverTvOnTheAir';
import DiscoverTvTopRated from './components/DiscoverItems/DiscoverTvTopRated';
import DiscoverTvTrendingWeek from './components/DiscoverItems/DiscoverTvTrendingWeek';
import DiscoverTvTrendingDay from './components/DiscoverItems/DiscoverTvTrendingDay';

import Search from './components/Search/Search';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js'



const App = () => {

  return (
    <MovieState>
      <Router>
        <ScrollToTop>
          <Navbar />
          <Switch>

            <Route exact path="/" >
              <Header />
              <MoviesController />
              <MovieTvContainer />
            </Route>

            <Route exact path="/details/movie/:id" component={DetailsMovie} />
            <Route exact path="/details/tv/:id" component={DetailsTv} />
            <Route exact path="/details/person/:id" component={DetailsPerson} />
            <Route exact path="/discover" component={Discover} />

            <Route exact path="/discover/movie/upcoming" component={DiscoverMovieUpcoming} />
            <Route exact path="/discover/movie/popular" component={DiscoverMoviePopular} />
            <Route exact path="/discover/movie/now-playing" component={DiscoverMovieNowPlaying} />
            <Route exact path="/discover/movie/top-rated" component={DiscoverMovieTopRated} />
            <Route exact path="/discover/movie/trending-week" component={DiscoverMovieTrendingWeek} />

            <Route exact path="/discover/tv/airing-today" component={DiscoverTvAiringToday} />
            <Route exact path="/discover/tv/popular" component={DiscoverTvPopular} />
            <Route exact path="/discover/tv/on-the-air" component={DiscoverTvOnTheAir} />
            <Route exact path="/discover/tv/top-rated" component={DiscoverTvTopRated} />
            <Route exact path="/discover/tv/trending-week" component={DiscoverTvTrendingWeek} />
            <Route exact path="/discover/tv/trending-today" component={DiscoverTvTrendingDay} />

            <Route exact path="/search" component={Search} />

          </Switch>
          <Footer />
        </ScrollToTop>
      </Router>
    </MovieState>
  );
}

export default App;