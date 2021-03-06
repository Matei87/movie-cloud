import React, { useState, useEffect } from 'react';
import './DiscoverItems.css';

import { IoIosStar } from "react-icons/io";
import { HiClock } from "react-icons/hi";
import { Link } from 'react-router-dom';
import defaultmovie from '../../pictures/defaultmovie.png';

const DiscoverMovieUpcoming = () => {
    const [data, setData] = useState({
        moviesUpcoming: []
    });

    const handleMovies = async () => {
        try {
            const MOVIE_URL_UPCOMING = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
            const response = await fetch(MOVIE_URL_UPCOMING);
            const data = await response.json();
            setData({ moviesUpcoming: data.results });
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleMovies();
    }, []);

    const { moviesUpcoming } = data;

    return (
        <div id="discover-item" className="container">

            <div className="discover-header">
                <h1>UPCOMING MOVIES</h1>
            </div>

            <div className="discover-content">
                {moviesUpcoming.map(content => (
                    <div className="discover-content-item" key={content.id}>
                        <Link to={{
                            pathname: `/details/movie/${content.id}`,
                            state: { id: content.id }
                        }}>
                            <img src={content.backdrop_path || content.poster_path ? `https://image.tmdb.org/t/p/w200${content.poster_path || content.backdrop_path}` : defaultmovie} alt={content.original_title} />
                        </Link>
                        <div className="discover-content-item-footer">
                            <p>
                                {content.release_date ? <span className="HiClock"><HiClock /> {(content.release_date).slice(0, 4)}</span> : null}
                                {content.vote_average !== null ? <span className="IoIosStar"><IoIosStar /> {((content.vote_average || 0))}</span> : null}
                            </p>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default DiscoverMovieUpcoming;