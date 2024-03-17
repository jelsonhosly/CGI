import React from 'react';
import './CSS/feeding1.css';
import feed1 from './img/feeding1.jpg';
import formula from './img/formula.jpg';
import logo from './img/logo.png';

export default function Feeding1() {
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

      <div className="content">
        <img src={feed1} className="feeding1" alt="Feeding" />
        <div className="topic">FEEDING</div>
        <img src={formula} className="formula" alt="Formula" />
        <div>
          <table className="fT1" cellSpacing="25px">
            <tr>
              <td>
                <h1 className="topic1">Breastfeeding: </h1><br /><br />
                Feed your baby every 2-3 hours during the day and night. Aim for a minimum of 8-12 breastfeeding sessions in a 24-hour period. Watch for hunger cues, such as rooting, sucking on fists, or increased alertness.
              </td>
              <td>
                <h1 className="topic1">Formula Feeding: </h1><br /><br />
                Offer formula every 2-3 hours, or as per your baby's hunger cues. Aim for around 2-3 ounces of formula per feeding. Consider night feedings, but your baby may start to have slightly longer stretches at night.
              </td>
              <td>
                <h1 className="topic1">Responsive Feeding:</h1> <br /><br />
                Be flexible and responsive to your baby's needs; some feedings may be closer together, especially during growth spurts. Allow your baby to feed until they show signs of fullness, such as turning away or relaxing their hands.
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}


