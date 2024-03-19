import React from 'react';
import './CSS/growth1.css'; // Import your CSS file
import one from './images/12.jpg';

function Movement12() {
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
          <div className="photo-container11">
            <h1 className="h122">
              Baby movements <br />
              <span className="h12">12 months</span>
            </h1>
          </div>
          <div className="subtopics-grid">
            <div className="subtopic">
              <h3>Exploration</h3>
              <p>They are highly curious and eager to explore their surroundings. They may crawl or walk around, touching, grabbing, and examining objects.</p>
            </div>
            <div className="subtopic">
              <h3>Crawling/Walking</h3>
              <p>Many babies begin to crawl proficiently or even take their first steps around this age. Some may already be walking confidently.</p>
            </div>
            <div className="subtopic">
              <h3>Fine Motor Skills</h3>
              <p>They start to develop better control over their fingers and hands, allowing them to pick up small objects, stack blocks, and feed themselves with finger foods.</p>
            </div>
            <div className="subtopic">
              <h3>Gross Motor Skills</h3>
              <p>They enjoy activities like climbing, cruising along furniture, and possibly attempting to run.</p>
            </div>
            <div className="subtopic">
              <h3>Imitation</h3>
              <p>Babies at this age may imitate actions they see others do, like clapping hands, waving, or playing with toys in a certain way.</p>
            </div>
            <div className="subtopic">
              <h3>Communication</h3>
              <p>They may begin to use gestures, such as pointing or shaking their heads, to communicate their desires or needs.</p>
            </div>
            <div className="subtopic">
              <h3>Reactions</h3>
              <p>Babies are more responsive to their environment and may react to sounds, music, or voices with excitement or curiosity.</p>
            </div>
            <div className="subtopic">
              <h3>Play</h3>
              <p>They enjoy simple games like peek-a-boo, playing with toys that make sounds or light up, and engaging in interactive play with caregivers.</p>
            </div>
            <div className="subtopic">
              <h3>Independence</h3>
              <p>They may show signs of wanting to do things on their own, like feeding themselves with a spoon or trying to dress themselves with assistance.</p>
            </div>
            <div className="subtopic">
              <h3>Social Interaction</h3>
              <p>Babies may show interest in other children and adults, smiling, laughing, or reaching out to interact with them.</p>
            </div>
          </div>
        </div>
      </div>

      <p align="center">These movements and behaviors of a 12-month-old are characterized by increasing mobility, exploration, communication attempts, and growing independence.</p>
      <br /><br />
      <form>
        <input type="text" name="search" placeholder="Search.." />
      </form>

      <p className="p11">At 12 months, your baby sleeps well, eats regularly, masters advanced motor skills, babbles more, enjoys social interaction, explores actively, and forms strong bonds with caregivers.</p>
    </div>
  );
}

export default Movement12;
