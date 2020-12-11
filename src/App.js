import React, { lazy, Suspense } from 'react';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';


import MovieState from './context/MovieState';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js';


//import Homepage from './components/Homepage/Homepage';
const Homepage = lazy(() => import('./components/Homepage/Homepage'));

//import DetailsMovie from './components/DetailsMovie/DetailsMovie';
const DetailsMovie = lazy(() => import('./components/DetailsMovie/DetailsMovie'));
//import DetailsTv from './components/DetailsTv/DetailsTv';
const DetailsTv = lazy(() => import('./components/DetailsTv/DetailsTv'));
//import DetailsPerson from './components/DetailsPerson/DetailsPerson';
const DetailsPerson = lazy(() => import('./components/DetailsPerson/DetailsPerson'));
//import Discover from './components/Discover/Discover';
const Discover = lazy(() => import('./components/Discover/Discover'));
//import DiscoverMoviePopular from './components/DiscoverItems/DiscoverMoviePopular';
const DiscoverMoviePopular = lazy(() => import('./components/DiscoverItems/DiscoverMoviePopular'));
//import DiscoverMovieUpcoming from './components/DiscoverItems/DiscoverMovieUpcoming';
const DiscoverMovieUpcoming = lazy(() => import('./components/DiscoverItems/DiscoverMovieUpcoming'));
//import DiscoverMovieTopRated from './components/DiscoverItems/DiscoverMovieTopRated';
const DiscoverMovieTopRated = lazy(() => import('./components/DiscoverItems/DiscoverMovieTopRated'));
//import DiscoverMovieNowPlaying from './components/DiscoverItems/DiscoverMovieNowPlaying';
const DiscoverMovieNowPlaying = lazy(() => import('./components/DiscoverItems/DiscoverMovieNowPlaying'));
//import DiscoverMovieTrendingWeek from './components/DiscoverItems/DiscoverMovieTrendingWeek';
const DiscoverMovieTrendingWeek = lazy(() => import('./components/DiscoverItems/DiscoverMovieTrendingWeek'));


//import DiscoverTvAiringToday from './components/DiscoverItems/DiscoverTvAiringToday';
const DiscoverTvAiringToday = lazy(() => import('./components/DiscoverItems/DiscoverTvAiringToday'));
//import DiscoverTvPopular from './components/DiscoverItems/DiscoverTvPopular';
const DiscoverTvPopular = lazy(() => import('./components/DiscoverItems/DiscoverTvPopular'));
//import DiscoverTvOnTheAir from './components/DiscoverItems/DiscoverTvOnTheAir';
const DiscoverTvOnTheAir = lazy(() => import('./components/DiscoverItems/DiscoverTvOnTheAir'));
//import DiscoverTvTopRated from './components/DiscoverItems/DiscoverTvTopRated';
const DiscoverTvTopRated = lazy(() => import('./components/DiscoverItems/DiscoverTvTopRated'));
//import DiscoverTvTrendingWeek from './components/DiscoverItems/DiscoverTvTrendingWeek';
const DiscoverTvTrendingWeek = lazy(() => import('./components/DiscoverItems/DiscoverTvTrendingWeek'));
//import DiscoverTvTrendingDay from './components/DiscoverItems/DiscoverTvTrendingDay';
const DiscoverTvTrendingDay = lazy(() => import('./components/DiscoverItems/DiscoverTvTrendingDay'));

//import Search from './components/Search/Search';
const Search = lazy(() => import('./components/Search/Search'));




const App = () => {

  return (
    <MovieState>
      <Router>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Suspense fallback={<Loader />} >

              <Route exact path="/" component={Homepage} />

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

            </Suspense>
          </Switch>
          <Footer />
        </ScrollToTop>
      </Router>
    </MovieState>
  );
}

export default App;