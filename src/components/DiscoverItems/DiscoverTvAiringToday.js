import React, { useState, useEffect } from 'react';
import './DiscoverItems.css';

import { IoIosStar } from "react-icons/io";
import { HiClock } from "react-icons/hi";
import { Link } from 'react-router-dom';
import defaultmovie from '../../pictures/defaultmovie.png';

const DiscoverTvAiringToday = () => {
    const [data, setData] = useState({
        tvAiringToday: []
    });

    const handleTV = async () => {
        try {
            const TV_URL_AIRINGTODAY = `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
            const response = await fetch(TV_URL_AIRINGTODAY);
            const data = await response.json();
            setData({ tvAiringToday: data.results, loading: true });
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleTV();
    }, []);

    const { tvAiringToday } = data;

    return (
        <div id="discover-item" className="container">

            <div className="discover-header">
                <h1>AIRING TODAY TV SHOWS</h1>
            </div>

            <div className="discover-content">
                {tvAiringToday.map(content => (
                    <div className="discover-content-item" key={content.id}>
                        <Link to={{
                            pathname: `/details/tv/${content.id}`,
                            state: { id: content.id }
                        }}>
                            <img src={content.backdrop_path || content.poster_path ? `https://image.tmdb.org/t/p/w200${content.poster_path || content.backdrop_path}` : defaultmovie} alt={content.original_title} />
                        </Link>
                        <div className="discover-content-item-footer">
                            <p>
                                {content.first_air_date ? <span className="HiClock"><HiClock /> {(content.first_air_date).slice(0, 4)}</span> : null}
                                {content.vote_average !== null ? <span className="IoIosStar"><IoIosStar /> {((content.vote_average || 0))}</span> : null}
                            </p>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default DiscoverTvAiringToday;