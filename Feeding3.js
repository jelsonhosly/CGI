import React from 'react';
import './CSS/main.css';
import logo from './img/logo.png'
import month5 from './img/month5.png';
import bottle from './img/bottle.jpg';


export default function Feeding3() {
    return (
        <div>
            <div className="heading">
                <img src={logo} alt="logo" className="logo" />
                <div className="navbar">
                    <input type="submit" name="home" value="Home" className="b1" />
                    <input type="submit" name="signin" value="Sign In" className="b2" />
                    <input type="submit" name="signup" value="Sign Up" className="b3" />
                    <input type="submit" name="contact" value="Contact" className="b4" />
                </div>
            </div>

            <div className="content">
                <div className="topicM3">How Much to feed a 5 month</div>
                <img src={month5} alt="5 month schedule" className="scheduleM3" />
                <img src={bottle} alt="bottle" className="bottle" />
                <div className="dataMonth3">
                    <p>At 5 months, most babies will need to eat every 3 - 4 hours totaling about 4 - 6 daily feedings. On average, they should consume roughly 22 - 28 oz of formula or breast milk each day. While there is no “perfect” amount your baby should be eating, you can tell if they are getting enough if they are growing adequately and having 4 - 6 wet diapers a day.
                        <br /><br />
                        Around this time, you might start thinking about serving solid foods to your baby. While previous recommendations have said to start your baby on cereal at 4 months old, the American Academy of Pediatrics now recommends exclusively serving breast milk or formula until 6 months of age. However, you may start seeing signs of readiness including your baby being able to sit unassisted, bringing objects to their mouth, improved head and neck control, and becoming interested in solid food.
                    </p>
                </div>

                <div>
                    <h1 className="topicMonth3">4 tips for feeding your 5 month old baby</h1>
                    <ol className="point">
                        <li>Follow baby’s hunger and fullness cues</li>
                        <li>Ensure safe bottle feeding</li>
                        <li>Get baby ready for solid foods</li>
                        <li>Begin watching for signs of readiness for solid food</li>
                    </ol>
                </div>
            </div>
        </div>
    );
}


