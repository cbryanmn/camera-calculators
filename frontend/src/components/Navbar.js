import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar">
                    <div className="logo-div">
                        <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                            <span className="camera">Camera</span><span className="calculators">Calculators</span>
                        </Link>
                    </div>
                    <div className="navbar-right-div">
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/pinhole' className="nav-links" onClick={closeMobileMenu}>
                                    Pinhole
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/simplelens' className="nav-links" onClick={closeMobileMenu}>
                                    Simple Lens
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/cameraobscura' className="nav-links" onClick={closeMobileMenu}>
                                    Camera Obscura
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
