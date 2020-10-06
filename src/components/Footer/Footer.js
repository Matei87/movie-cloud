import React from 'react';
import './Footer.css';
import { RiMailSendLine } from "react-icons/ri";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
    return (
        <footer>
            <div className="footer-links">
                <h2>MOVIE CLOUD</h2>
                <div className="footer-link">
                    <a href="">Home</a>
                    <a href="">Discover</a>
                    <a href="">Profile</a>
                </div>
                <div className="footer-copy">
                    Made by <span>Matei Mircea</span> @ {new Date().getFullYear()}
                </div>
            </div>
            <div className="footer-image">
                <a href="">
                    <img src={require('../../moviecloudresized.png')} alt="logo" />
                </a>
            </div>
            <div className="footer-contact">
                <a href="">
                    <RiMailSendLine />
                </a>
                <a href="">
                    <IoLogoGithub />
                </a>
                <a href="">
                    <IoLogoLinkedin />
                </a>
            </div>
        </footer>
    )
}

export default Footer;