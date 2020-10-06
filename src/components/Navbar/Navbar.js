import React from 'react';
import './Navbar.css';
import { ImHome } from "react-icons/im";
import { IoIosCompass, IoMdSearch } from "react-icons/io";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
            <a className="navbar-brand" href="">
                <img src={require('../../moviecloudresized.png')} alt="logo" />
            </a>

            <form className="">
                <input className="form-control " type="search" placeholder="Search..." aria-label="Search" />
                <button className="btn" type="submit">
                    <IoMdSearch />
                </button>
            </form>
            <ul id="customElements">
                <li>
                    <a href="#"><ImHome /></a>
                </li>
                <li>
                    <a href="#">
                        <IoIosCompass />
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;