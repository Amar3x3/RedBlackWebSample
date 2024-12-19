import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css'


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const videoRef = useRef(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const handleLinkClick = () => {
    handleMenuToggle();
  };

  // Play video when the menu is opened
  useEffect(() => {
    if (isMenuOpen && videoRef.current) {
      videoRef.current.play();
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav className={`navbarr ${isMenuOpen ? 'open' : ''} share-tech`}>
        <div className="nav_container">
          <div className="logo">
            {/* <img src={require('../images/logo.png')} className="logo" alt="" /> */}
          </div>
          <div className="hamburger-menu" onClick={handleMenuToggle}>
            <div className="bar"></div>
          </div>
        </div>
        <div className={`links ${isMenuOpen ? 'show' : ''}`}>
         
          
          <ul>
            <li className="nav_item ">
              <Link
                to="/"
                className={location.pathname === '/' ? 'active_nav' : ''}
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li className="nav_item ">
              <Link
                to="/projects"
                className={location.pathname === '/aboutme' ? 'active_nav' : ''}
                onClick={handleLinkClick}
              >
                About Me
              </Link>
            </li>
            <li className="nav_item">
              <Link
                to="/achievements"
                className={location.pathname === '/achievements' ? 'active_nav' : ''}
                onClick={handleLinkClick}
              >
                Achievements
              </Link>
            </li>
            <li className="nav_item ">
              <Link
                to="/exp"
                className={location.pathname === '/exp' ? 'active_nav' : ''}
                onClick={handleLinkClick}
              >
                Experience
              </Link>
            </li>

          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
