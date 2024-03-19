import React from 'react';
import './CSS/growth1.css'; // Import your CSS file
import one from './images/9.jpg';
import './images/headingbg.png'

function Movement9() {
  return (
    <div>
      <div className="heading">
        <img src='headingbg.png' className="logo" alt="Logo" />
        <div className="navbar">
          <input type="submit" name="home" value="Home" className="b1" />
          <input type="submit" name="signin" value="Sign In" className="b2" />
          <input type="submit" name="signup" value="Sign Up" className="b3" />
          <input type="submit" name="contact" value="Contact" className="b4" />
        </div>
      </div>

      <br />

      <div className="main">
        <br />
        <div className="container">
          <div className="photo-container9">
            <h1 className="h111">
              Baby movements <br />
              <span className="m11">09 months</span>
            </h1>
          </div>
          <div className="subtopics-grid">
            <div className="subtopic">
              <h3>Crawling</h3>
              <p>Many babies are proficient crawlers by this age, moving around on their hands and knees or using alternative methods such as bottom shuffling.</p>
            </div>
            <div className="subtopic">
              <h3>Pulling to stand</h3>
              <p>Babies may pull themselves up to a standing position using furniture or other objects for support.</p>
            </div>
            <div className="subtopic">
              <h3>Cruising</h3>
              <p>Once they can stand, babies may start to cruise along furniture, holding on for balance.</p>
            </div>
            <div className="subtopic">
              <h3>Walking</h3>
              <p>Some babies may take their first steps around this age, although it's also common for walking to begin a bit later.</p>
            </div>
            <div className="subtopic">
              <h3>Fine motor skills</h3>
              <p>Babies may start to develop more refined movements with their hands, such as picking up small objects using their thumb and forefinger (pincer grasp) or banging objects together.</p>
            </div>
            <div className="subtopic">
              <h3>Exploration</h3>
              <p>Babies are curious and will likely be exploring their environment by reaching for objects, grabbing things, and examining them closely.</p>
            </div>
          </div>
        </div>
      </div>

      <p align="center">These movements are crucial for their physical and sensory development at this stage.</p>
      <br /><br />
      <form>
        <input type="text" name="search" placeholder="Search.." />
      </form>

      <p className="p11">At twelve months old, your baby sleeps longer, feeds regularly, develops advanced motor skills, babbles more, engages socially, grows steadily, explores actively, and bonds deeply with caregivers.</p>
    </div>
  );
}

export default Movement9;
