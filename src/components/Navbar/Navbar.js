import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link, useHistory, withRouter } from 'react-router-dom';
import { ImHome } from "react-icons/im";
import { IoIosCompass, IoMdSearch } from "react-icons/io";

import MovieContext from '../../context/MovieContext';

const Navbar = () => {
    const { handleSearch } = useContext(MovieContext);
    const [data, setData] = useState('');

    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(e.target[0].value);
        history.push("/search");
        setData('');
    }

    const handleChange = (e) => {
        setData(e.target.value);
    }

    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
            <Link to="/" className="navbar-brand">
                <img src={require('../../pictures/moviecloudresized.png')} alt="logo" />
            </Link>
            <form className="" onSubmit={handleSubmit}>
                <input
                    className="form-control"
                    type="search"
                    placeholder="Search..."
                    aria-label="Search"
                    value={data}
                    onChange={handleChange}
                />
                <button className="btn" type="submit">
                    <IoMdSearch />
                </button>
            </form>
            <ul id="customElements">
                <li>
                    <Link to="/" >
                        <ImHome />
                    </Link>
                </li>
                <li>
                    <Link to="/discover" >
                        <IoIosCompass />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default withRouter(Navbar);