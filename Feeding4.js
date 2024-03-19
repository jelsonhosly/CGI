import React from 'react';
import './CSS/main.css';
import logo from './img/logo.png';
import month6 from './img/month6.png';
import baby6 from './img/baby6.jpeg';
import baby1 from './img/6month.jpeg';

export default function Feeding4() {
  return (
    <div>
      <div className="heading">
        <img src={logo} className="logo" alt="logo" />
        <div className="navbar">
          <input type="submit" name="home" value="Home" className="b1" />
          <input type="submit" name="signin" value="Sign In" className="b2" />
          <input type="submit" name="signup" value="Sign Up" className="b3" />
          <input type="submit" name="contact" value="Contact" className="b4" />
        </div>
      </div>

      <div className="content">
        <div className="topicMonth6">Feeding schedule at 6 months by food source</div>
        <img src={month6} className="scheduleMonth6" alt="schedule" />
        <img src={baby6} className="baby6" alt="baby" />
        <img src={baby1} className="month6" alt="6 months" />

        <div className="head1">Breast milk and formula</div>
        <div className="head2">Solid Food</div>
        <p className="description1">
          Breast milk or formula remains the most important food at 6 months of age. The easiest way to ensure a baby eats enough is to nurse or formula feed them on demand when they show signs of hunger.
        </p>
        <p className="description2">
          4 to 9 tablespoons each of cereal, fruit and vegetables a day (in two to three meals); 1 to 6 tablespoons of a meat or other protein
        </p>

        <div>
          <table className="pointMonth6">
            <tr>
              <td className="d1">
                How Much a 6 Month-Old Eats
                <br /><br />
                <ul className="list1">
                  <li>24 to 36 ounces of formula or breast milk; now that your baby's a more efficient nurser, you'll probably breastfeed 4 to 6 times a day</li>
                  <li>4 to 9 tablespoons of cereal, fruit, and vegetables a day, spread out over two to three meals</li>
                  <li>1 to 6 tablespoons of meat or another protein (like pureed meat or tofu or a scrambled egg) a day</li>
                </ul><br />
                Remember that these amounts are general guidelines. Be careful not to force your baby to eat but instead follow their cues.
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}


