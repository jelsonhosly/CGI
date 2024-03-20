import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="heading">
      <img src="logo.jpg" alt="logo" className="logo" />
      <div className="navbar">
        <input type="submit" name="home" value="Home" className="b1" />
        <input type="submit" name="signin" value="Sign In" className="b2" />
        <input type="submit" name="signup" value="Sign Up" className="b3" />
        <input type="submit" name="contact" value="Contact" className="b4" />
      </div>
    </div>
  );
};

export default Header;