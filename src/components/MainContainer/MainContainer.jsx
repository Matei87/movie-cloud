import { useContext } from 'react';
import './MainContainer.css';

import MovieContext from '../../context/MovieContext';
import MainPageContainers from '../shared/MainPageContainers/MainPageContainers';

const MainContainer = () => {
  const {
    moviesUpcoming,
    moviesPopular,
    moviesNowPlaying,
    moviesTopRated,
    tvAiringToday,
    tvPopular,
    tvOnTheAir,
    tvTopRated,
    type,
    loading,
  } = useContext(MovieContext);

  let content;
  if (type === 'movie') {
    content = (
      <>
        <MainPageContainers
          movies={moviesUpcoming}
          title='Upcoming'
          type='movie'
        />
        <MainPageContainers
          movies={moviesPopular}
          title='Popular'
          type='movie'
        />
        <MainPageContainers
          movies={moviesNowPlaying}
          title='Now Playing'
          type='movie'
        />
        <MainPageContainers
          movies={moviesTopRated}
          title='Top Rated'
          type='movie'
        />
      </>
    );
  }
  if (type === 'tv') {
    content = (
      <>
        <MainPageContainers
          movies={tvAiringToday}
          title='Airing Today'
          type='tv'
        />
        <MainPageContainers movies={tvPopular} title='Popular' type='tv' />
        <MainPageContainers movies={tvOnTheAir} title='On The Air' type='tv' />
        <MainPageContainers movies={tvTopRated} title='Top Rated' type='tv' />
      </>
    );
  }

  return (
    <div className='content container'>{loading === true ? content : null}</div>
  );
};

export default MainContainer;
