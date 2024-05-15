import React, { useState, useEffect } from 'react';
import './CSS/NavigationBarStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function NavigationBar() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600); // Adjust the breakpoint as needed
    };
    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize); // Listen for window resize
    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="heading">
        <img src={require('./assets/logo.png')} className="logo" alt="logo" />
        <div className="navbar">
          {isMobile ? (
            <div className="hamburger-menu" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faBars} />
            </div>
          ) : (
            <>
              <input type="submit" name="home" value="Home" className="b1" />
              <input type="submit" name="signin" value="Sign In" className="b2" />
              <input type="submit" name="signup" value="Sign Up" className="b3" />
              <input type="submit" name="contact" value="Contact" className="b4" />
            </>
          )}
        </div>
      </div>

      <div className="content">
        {isMobile && menuOpen && (
          <>
            <input type="submit" name="home" value="Home" className="b1" />
            <input type="submit" name="signin" value="Sign In" className="b2" />
            <input type="submit" name="signup" value="Sign Up" className="b3" />
            <input type="submit" name="contact" value="Contact" className="b4" />
          </>
        )}
      </div>
    </div>
  );
}