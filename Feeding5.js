import React from 'react';
import './CSS/main.css';
import logo from './img/logo.png';
import baby1 from './img/baby11.jpg';
import baby2 from './img/baby3.jpeg';
import schedule from './img/month11.png';

export default function Feeding5() {
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
        <div className="topicMonth11">How Much Should a 11-Month-Old Eat?</div>
        <img src={schedule} className="scheduleMonth11" alt="schedule" />
        <img src={baby1} className="month11" alt="11 months" />
        <img src={baby2} className="mon11" alt="3 months" />
        <div className="data11">
          <h1 className="topic11">1. Breakfast</h1>
          <ul className="list1">
            <li>120 ml to 180 ml of breast milk or formula</li>
            <li>Quarter to half a cup of mashed boiled egg or cereal</li>
            <li>4 ounces of fruit</li>
          </ul>
        </div>
        <div className="datamonth11">
          <h1 className="topic11">2. Midmorning snack</h1>
          <ul className="list11">
            <li>120 ml to 180 ml of breast milk, formula, or water</li>
            <li>2 ounces of diced cheese</li>
          </ul>
        </div>
        <div className="data3">
          <h1 className="topic11">3. Lunch</h1>
          <ul className="list11">
            <li>60 ml to 120 ml of yogurt or quarter to half a cup of meat</li>
            <li>Quarter to half a cup of veggies</li>
            <li>120 ml to 180 ml of breast milk or formula</li>
          </ul>
        </div>
        <div className="data4">
          <h1 className="topic11">4. Afternoon snack</h1>
          <ul className="list11">
            <li>1 teething biscuit or cracker</li>
            <li>A quarter cup of diced fruit, if she can feed herself</li>
          </ul>
        </div>
        <div className="data5">
          <h1 className="topic11">5. Dinner</h1>
          <ul className="list11">
            <li>120 ml to180 ml of breast milk or formula</li>
            <li>2 ounces of poultry or meat</li>
            <li>2 to 4 ounces of pasta, rice, or potatoes</li>
            <li>A quarter cup of fruit</li>
          </ul>
        </div>
      </div>
    </div>
  );
}


