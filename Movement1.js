import React from 'react';
import './CSS/growth1.css'; // Import your CSS file
// import one from './images/1.jpg';
import logo from './images/logo.png'

function Movement1() {
    return (
        <div>
            <div className="heading">
                <img src={logo} className="logo" alt="Logo" />
                <div className="navbar">
                    <input type="submit" name="home" value="Home" className="b1" />
                    <input type="submit" name="signin" value="Sign In" className="b2" />
                    <input type="submit" name="signup" value="Sign Up" className="b3" />
                    <input type="submit" name="contact" value="Contact" className="b4" />
                </div>
            </div>

            
            <div className="main">
                <br />
                <div className="container">
                    <div className="photo-container1">
                        <h1 className="movements-heading">Baby movements <br /> 01 month</h1>
                        
                    </div>
                    <div className="subtopics-grid">
                        <div className="subtopic">
                            <h3>Head Tilts and Tiny Twirls</h3>
                            <p>In the dance of development, head control is a graceful pirouette. Your one-month-old, though still mastering the art, will charm you with those wobbly but determined head tilts, making each, moment a small but significant dance step towards independence.</p>
                        </div>
                        <div className="subtopic">
                            <h3>Leg Jigs and Playful Shimmies</h3>
                            <p>Watch closely, and you'll catch those random leg kicks and wiggles that could rival the liveliest dance moves. These spontaneous leg jigs are their way of experimenting with their newfound limbs, and they're sure to bring a smile to your face.</p>
                        </div>
                        <div className="subtopic">
                            <h3>Grasping the Spotlight</h3>
                            <p>Picture those miniature hands, always ready for a standing ovation. The grasping reflex is your baby's way of giving a heartfelt round of applause to the world around them. Whether it's your finger or a soft toy, their tiny grip is an endearing act in this early ballet of life.</p>
                        </div>
                        <div className="subtopic">
                            <h3>The Gaze Waltz</h3>
                            <p>While they might not be ready for a ballroom dance, your baby is already engaging in the enchanting gaze waltz. Their eyes, like twinkling stars, follow the light, shadows, and the faces of those who have become their audience, creating a mesmerizing dance of visual connection.</p>
                        </div>
                    </div>
                </div>
            </div>
<br/>
<br/><br/><br/><br/>
            <form>
                <input type="text" name="search" placeholder="Search.." />
            </form>
            <p className="p11">One month old baby sleeps peacefully, eats frequently, grasps objects reflexively, communicates through crying, engages with caregivers attentively, grows rapidly, and forms bonds affectionately.</p>
        </div>
    );
}

export default Movement1;
