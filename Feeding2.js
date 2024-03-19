import React from 'react';
import './CSS/main.css';
import schedule from './img/schedule.png';
import logo from './img/logo.png';
import first from './img/3month.jpg';
import second from './img/3month1.jpg';

export default function Feeding2() {
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
        <div className="topicF2">How Much Should a 3-Month-Old Eat?</div>
        <img src={schedule} className="schedule1" alt="Schedule" />
        <img src={first} className="month3" alt="3 months old" />
        <img src={second} className="mon" alt="3 months old" />
        <div className="dataM">
          <h1 className="topicB1">Breastfeeding: </h1><br /><br />
          <p>
            At 3 months, your baby is becoming more active, will begin to breastfeed less often, and may sleep for longer periods of time at night.<br /><br />
            You may have to nurse just six to eight times per day at this stage (or about every three to four hours).
            If your baby’s healthcare provider sees that he’s gaining weight and growing at a regular pace, then he’s probably getting the right amount of nutrition.<br /><br />
            The number of wet and soiled diapers is also a great indicator as to whether or not he is eating well. Your baby should have about four to six wet diapers a day.<br /><br />
            See your baby’s healthcare provider if you’re concerned that your little one may not be getting enough to eat.
          </p>
        </div>
        <div className="data2">
          <h1 className="topicB1">Formula Feeding: </h1><br /><br />
          <p>
            As your little one continues to grow, you’ll notice that he wants to eat more during each feeding and begins to sleep for longer intervals at night.<br /><br />
            Slight adjustments to your 3-month old’s feeding schedule may include:
          </p><br />
          <ul className="list">
            <li>Increasing the amount of formula to about 5 ounces per feeding</li>
            <li>Giving your baby formula about six to eight times per day</li>
            <li>Switching the newborn nipple size or style on your baby’s bottles to make it easier for him to drink from the bottle.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}


