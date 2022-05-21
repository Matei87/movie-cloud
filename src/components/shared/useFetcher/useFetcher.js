import { useState, useEffect } from 'react';

const useFetcher = (url1, url2 = '&language=en-US&page=1') => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const URL = `${url1 + process.env.REACT_APP_API_KEY + url2}`;
      const response = await fetch(URL);
      const data = await response.json();
      setMovies(data.results);
    })();
  }, [url1, url2]);

  return { movies };
};

export default useFetcher;
