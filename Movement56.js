import React from 'react';
import './CSS/growth1.css'; // Import your CSS file
import one from './images/5m.jpg';

function Movement56() {
  return (
    <div>
      <div className="heading">
        <img src="logo.png" className="logo" alt="Logo" />
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
          <div className="photo-container3">
            <h1 className="h11">
              Baby movements <br />
              <span className="h12">05 / 06 month</span>
            </h1>
          </div>
          <div className="subtopics-grid">
            <div className="subtopic">
              <h3>Lifting Their Head</h3>
              <p>During tummy time, they strengthen neck and upper body muscles by lifting their chest and head off the ground.</p>
            </div>
            <div className="subtopic">
              <h3>Kicking Legs and Moving Arms</h3>
              <p>They explore their movements by kicking legs and waving arms, expressing excitement and curiosity.</p>
            </div>
            <div className="subtopic">
              <h3>Reaching and Grabbing</h3>
              <p>They exhibit hand-eye coordination by reaching for and grabbing objects within reach, exploring their surroundings through touch.</p>
            </div>
            <div className="subtopic">
              <h3>Turning Head to Follow Objects or Sounds</h3>
              <p>They become more aware of their environment, turning their head to track moving objects or familiar sounds, developing sensory awareness.</p>
            </div>
          </div>
        </div>
      </div>

      <form>
        <input type="text" name="search" placeholder="Search.." />
      </form>

      <p className="p11">At five months old, your baby sleeps longer, feeds regularly, develops motor skills, babbles, engages socially, grows steadily, explores, and bonds with caregivers.</p>
    </div>
  );
}

export default Movement56;
