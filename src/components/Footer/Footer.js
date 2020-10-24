import React from 'react';
import './Footer.css';

import { RiMailSendLine } from "react-icons/ri";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="footer-links">
                <h2>MOVIE CLOUD</h2>
                <div className="footer-link">
                    <Link to="/">Home</Link>
                    <Link to="/discover">Discover</Link>
                </div>
                <div className="footer-copy">
                    Made by <span>Matei Mircea</span> @ {new Date().getFullYear()}
                </div>
            </div>
            <div className="footer-image">
                <Link to="/">
                    <img src={require('../../pictures/moviecloudresized.png')} alt="logo" />
                </Link>
            </div>
            <div className="footer-contact">
                <a href="mailto: mrc.matei@protonmail.com">
                    <RiMailSendLine />
                </a>
                <a href="https://github.com/Matei87" target="_blank" rel="noopener noreferrer">
                    <IoLogoGithub />
                </a>
                <a href="https://www.linkedin.com/in/mateimircea/" target="_blank" rel="noopener noreferrer">
                    <IoLogoLinkedin />
                </a>
            </div>
        </footer>
    )
}

export default Footer;