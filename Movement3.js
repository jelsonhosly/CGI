import React from 'react';
import './CSS/growth1.css'; // Import your CSS file
import one from './images/3.jpg';

function Movement3() {
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
          <div className="photo-container2">
            <h1 className="h11">
              Baby movements <br />
              <span className="h12">03 month</span>
            </h1>
          </div>
          <div className="subtopics-grid">
            <div className="subtopic">
              <h3>Lifting Their Head</h3>
              <p>Around three months of age, infants start to acquire greater mastery over their neck muscles. They might raise their chest and head off the ground during tummy time and use their arms to support themselves. This prepares them for future physical development, such as sitting up and crawling, by strengthening the muscles in their neck and upper body.</p>
            </div>
            <div className="subtopic">
              <h3>Kicking Legs and Moving Arm</h3>
              <p>Babies at this age begin to experiment with movement and become more conscious of their limbs, as evidenced by their kicks and arm movements. When lying on their back or when they are held upright, they may kick their legs ferociously to convey their excitement and vitality. They will also wave their arms around, experimenting with how to manipulate their own motions and engage with nearby objects.</p>
            </div>
            <div className="subtopic">
              <h3>Reaching and Grabbing</h3>
              <p>Babies as young as three months old start to exhibit hand-eye coordination and start reaching for objects that catch their attention. They might grab onto things that are in their direct line of sight or swipe at toys that are suspended above them. This is the start of their ability to manipulate objects and use touch to investigate their surroundings.</p>
            </div>
            <div className="subtopic">
              <h3>Turning Head to Follow Objects or Sound</h3>
              <p>Babies' developing senses enable them to turn their heads to follow objects or sounds, and they also become more receptive to the sights and sounds around them. They can show that they are becoming more aware of their surroundings by turning their head to follow moving objects or orient toward familiar sounds</p>
            </div>
          </div>
        </div>
      </div>

      <form>
        <input type="text" name="search" placeholder="Search.." />
      </form>

      <p className="p11">Your 3-month-old is approaching a very significant milestone: Leaving the newborn stage behind and becoming an official infant. This period marks increased interaction and exploration.</p>
    </div>
  );
}

export default Movement3;
