import { lazy, Suspense } from 'react';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import MovieState from './context/MovieState';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
// import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

//import Homepage from './components/Homepage/Homepage';
const Homepage = lazy(() => import('./components/Homepage/Homepage'));

//import DetailsMovie from './components/DetailsMovie/DetailsMovie';
const DetailsMovie = lazy(() =>
  import('./components/DetailsMovie/DetailsMovie')
);
//import DetailsTv from './components/DetailsTv/DetailsTv';
const DetailsTv = lazy(() => import('./components/DetailsTv/DetailsTv'));
//import DetailsPerson from './components/DetailsPerson/DetailsPerson';
const DetailsPerson = lazy(() =>
  import('./components/DetailsPerson/DetailsPerson')
);
//import Discover from './components/Discover/Discover';
const Discover = lazy(() => import('./components/Discover/Discover'));
//import DiscoverMoviePopular from './components/DiscoverItems/DiscoverMoviePopular';
const DiscoverMoviePopular = lazy(() =>
  import('./components/DiscoverItems/DiscoverItem')
);
//import DiscoverMovieUpcoming from './components/DiscoverItems/DiscoverMovieUpcoming';
const DiscoverMovieUpcoming = lazy(() =>
  import('./components/DiscoverItems/DiscoverItem')
);
//import DiscoverMovieTopRated from './components/DiscoverItems/DiscoverMovieTopRated';
const DiscoverMovieTopRated = lazy(() =>
  import('./components/DiscoverItems/DiscoverItem')
);
//import DiscoverMovieNowPlaying from './components/DiscoverItems/DiscoverMovieNowPlaying';
const DiscoverMovieNowPlaying = lazy(() =>
  import('./components/DiscoverItems/DiscoverItem')
);
//import DiscoverMovieTrendingWeek from './components/DiscoverItems/DiscoverMovieTrendingWeek';
const DiscoverMovieTrendingWeek = lazy(() =>
  import('./components/DiscoverItems/DiscoverItem')
);

//import DiscoverTvAiringToday from './components/DiscoverItems/DiscoverTvAiringToday';
const DiscoverTvAiringToday = lazy(() =>
  import('./components/DiscoverItems/DiscoverItem')
);
//import DiscoverTvPopular from './components/DiscoverItems/DiscoverTvPopular';
const DiscoverTvPopular = lazy(() =>
  import('./components/DiscoverItems/DiscoverItem')
);
//import DiscoverTvOnTheAir from './components/DiscoverItems/DiscoverTvOnTheAir';
const DiscoverTvOnTheAir = lazy(() =>
  import('./components/DiscoverItems/DiscoverItem')
);
//import DiscoverTvTopRated from './components/DiscoverItems/DiscoverTvTopRated';
const DiscoverTvTopRated = lazy(() =>
  import('./components/DiscoverItems/DiscoverItem')
);
//import DiscoverTvTrendingWeek from './components/DiscoverItems/DiscoverTvTrendingWeek';
const DiscoverTvTrendingWeek = lazy(() =>
  import('./components/DiscoverItems/DiscoverItem')
);
//import DiscoverTvTrendingDay from './components/DiscoverItems/DiscoverTvTrendingDay';
const DiscoverTvTrendingDay = lazy(() =>
  import('./components/DiscoverItems/DiscoverItem')
);

//import Search from './components/Search/Search';
const Search = lazy(() => import('./components/Search/Search'));

const App = () => {
  return (
    <MovieState>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route exact path='/' element={<Homepage />} />
            <Route exact path='/movie/:id' element={<DetailsMovie />} />
            <Route exact path='/tv/:id' element={<DetailsTv />} />
            <Route exact path='/person/:id' element={<DetailsPerson />} />
            <Route exact path='/discover' element={<Discover />} />
            <Route
              exact
              path='/movie/upcoming'
              element={
                <DiscoverMovieUpcoming
                  title='UPCOMING MOVIES'
                  apiUrl='https://api.themoviedb.org/3/movie/upcoming?api_key='
                  type='movie'
                />
              }
            />
            <Route
              exact
              path='/movie/popular'
              element={
                <DiscoverMoviePopular
                  title='POPULAR MOVIES'
                  apiUrl='https://api.themoviedb.org/3/movie/popular?api_key='
                  type='movie'
                />
              }
            />
            <Route
              exact
              path='/movie/now-playing'
              element={
                <DiscoverMovieNowPlaying
                  title='NOW PLAYING MOVIES'
                  apiUrl='https://api.themoviedb.org/3/movie/now_playing?api_key='
                  type='movie'
                />
              }
            />
            <Route
              exact
              path='/movie/top-rated'
              element={
                <DiscoverMovieTopRated
                  title='TOP RATED MOVIES'
                  apiUrl='https://api.themoviedb.org/3/movie/top_rated?api_key='
                  type='movie'
                />
              }
            />
            <Route
              exact
              path='/movie/trending-week'
              element={
                <DiscoverMovieTrendingWeek
                  title='MOVIES TRENDING THIS WEEK'
                  apiUrl='https://api.themoviedb.org/3/trending/movie/week?api_key='
                  type='movie'
                />
              }
            />
            <Route
              exact
              path='/tv/airing-today'
              element={
                <DiscoverTvAiringToday
                  title='AIRING TODAY TV SHOWS'
                  apiUrl='https://api.themoviedb.org/3/tv/airing_today?api_key='
                  type='tv'
                />
              }
            />
            <Route
              exact
              path='/tv/popular'
              element={
                <DiscoverTvPopular
                  title='POPULAR TV SHOWS'
                  apiUrl='https://api.themoviedb.org/3/tv/popular?api_key='
                  type='tv'
                />
              }
            />
            <Route
              exact
              path='/tv/on-the-air'
              element={
                <DiscoverTvOnTheAir
                  title='ON THE AIR TV SHOWS'
                  apiUrl='https://api.themoviedb.org/3/tv/on_the_air?api_key='
                  type='tv'
                />
              }
            />
            <Route
              exact
              path='/tv/top-rated'
              element={
                <DiscoverTvTopRated
                  title='TOP RATED TV SHOWS'
                  apiUrl='https://api.themoviedb.org/3/tv/top_rated?api_key='
                  type='tv'
                />
              }
            />
            <Route
              exact
              path='/tv/trending-week'
              element={
                <DiscoverTvTrendingWeek
                  title='TV SHOWS TRENDING THIS WEEK'
                  apiUrl='https://api.themoviedb.org/3/trending/tv/week?api_key='
                  type='tv'
                />
              }
            />
            <Route
              exact
              path='/tv/trending-today'
              element={
                <DiscoverTvTrendingDay
                  title='TV SHOWS TRENDING TODAY'
                  apiUrl='https://api.themoviedb.org/3/trending/tv/day?api_key='
                  type='tv'
                />
              }
            />
            <Route exact path='/search' element={<Search />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </MovieState>
  );
};

export default App;
