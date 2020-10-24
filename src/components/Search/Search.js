import React, { useContext } from 'react';
import './Search.css';

import MovieContext from '../../context/MovieContext';
import { IoIosStar } from "react-icons/io";
import { HiClock } from "react-icons/hi";
import { Link } from 'react-router-dom';

import pic from '../../pictures/default.png';
import defaultmovie from '../../pictures/defaultmovie.png';



const Search = () => {
    const { multiSearch } = useContext(MovieContext);

    //console.log(multiSearch);

    return (
        <div id="search-item" className="container">

            <div className="search-header">
                <h1>SEARCH RESULTS</h1>
            </div>

            <div className="search-content">
                {multiSearch && multiSearch ? multiSearch.map(content => (
                    <div className="search-content-item" key={content.id}>

                        {content.media_type === 'movie' ? <>
                            <Link to={{
                                pathname: `/details/movie/${content.id}`,
                                state: { id: content.id }
                            }}>
                                <img src={content.backdrop_path || content.poster_path ? `https://image.tmdb.org/t/p/w200${content.poster_path || content.backdrop_path}` : defaultmovie} alt={content.original_title} />
                            </Link>
                            <div className="search-content-item-footer">
                                <p>
                                    {content.release_date ? <span className="HiClock"><HiClock /> {(content.release_date).slice(0, 4)}</span> : null}
                                    {content.vote_average !== null ? <span className="IoIosStar"><IoIosStar /> {((content.vote_average || 0))}</span> : null}
                                </p>
                            </div>
                        </> : content.media_type === 'tv' ? <>
                            <Link to={{
                                pathname: `/details/tv/${content.id}`,
                                state: { id: content.id }
                            }}>
                                <img src={content.backdrop_path || content.poster_path ? `https://image.tmdb.org/t/p/w200${content.poster_path || content.backdrop_path}` : defaultmovie} alt={content.original_title} />
                            </Link>
                            <div className="search-content-item-footer">
                                <p>
                                    {content.first_air_date ? <span className="HiClock"><HiClock /> {(content.first_air_date).slice(0, 4)}</span> : null}
                                    {content.vote_average !== null ? <span className="IoIosStar"><IoIosStar /> {((content.vote_average || 0))}</span> : null}
                                </p>
                            </div>
                        </> : <div className="details-content-cast-item" key={content.id}>
                                    <Link to={{
                                        pathname: `/details/person/${content.id}`,
                                        state: { id: content.id }
                                    }}>
                                        <img src={content.profile_path === null ? pic : `https://image.tmdb.org/t/p/w200${content.profile_path}`} alt={content.name} />
                                    </Link>
                                    <div className="search-content-item-footer-name">
                                        <p>{content.name}</p>
                                    </div>
                                </div>}

                    </div>
                )) : null}

            </div>

        </div>
    )
}

export default Search;