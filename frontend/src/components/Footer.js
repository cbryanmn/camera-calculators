import React from 'react';;
import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import './Footer.css';

function Footer() {
    return (
        <>
            <div className="footer-container">
                <div className="footer-links">
                    <Link to="/" className="footer-link">Home</Link>
                    <Link to="/pinhole" className="footer-link">Pinhole</Link>
                    <Link to="/simplelens" className="footer-link"><span className="footer-span">Simple Lens</span></Link>
                    <Link to="/cameraobscura" className="footer-link"><span className="footer-span">Camera Obscura</span></Link>
                </div>
                <div className="footer-contact">
                    <p className="footer-contact-p">
                        Email: ccbmnre@gmail.com
                    </p>
                    <div className="footer-social-div">
                        <Link to="http://www.instagram.com/seeseebe7" className="footer-social-link">
                            <FaInstagram className="footer-fa" />
                        </Link>
                        <Link to="http://www.twitter.com/seeseebe7" className="footer-social-link">
                            <FaTwitter className="footer-fa" />
                        </Link>
                    </div>
                </div>
                <div className="footer-legal">
                    <p className="footer-legal-p">
                        Project, Web Design and Content &copy; 2024 by Cassandra Bryan.
                    </p>
                    <p className="footer-legal-p">
                        All rights reserved.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer
