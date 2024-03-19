import React from 'react';
import './CSS/main.css';
import logo from './img/logo.png';
import month from './img/month12.png';
import baby1 from './img/baby12.jpg';
import baby2 from './img/babyT.jpeg';

export default function Feeding6() {
  return (
    <div>
      <div className="heading">
        <img src={logo} alt="Logo" className="logo" />
        <div className="navbar">
          <input type="submit" name="home" value="Home" className="b1" />
          <input type="submit" name="signin" value="Sign In" className="b2" />
          <input type="submit" name="signup" value="Sign Up" className="b3" />
          <input type="submit" name="contact" value="Contact" className="b4" />
        </div>
      </div>

      <div className="content">
        <div className="topic12">How Much Should a 12-Month-Old Eat?</div>
        <img src={month} alt="Month 12" className="schedule12" />
        <img src={baby2} alt="Baby T" className="babyT" />
        <img src={baby1} alt="Baby 12" className="monT" />
        <div className="data12">
          <h1 className="topic2">1. Breakfast</h1>
          <br />
          <ul className="listmonth12">
            <li>Unsweetened yogurt or cottage cheese with chopped strawberries</li>
            <li>Scrambled eggs with cheese</li>
            <li>Oatmeal with cooked apples or pears</li>
            <li>Toast cut in strips with butter, peanut butter, mashed avocado, or cream cheese.</li>
          </ul>
        </div>
        <div className="datamonth">
          <h1 className="topic2">2. Lunch</h1>
          <br />
          <ul className="listm1">
            <li>Pieces of grilled or roasted chicken, chopped broccoli, and blueberries</li>
            <li>Pasta with spinach and ricotta</li>
            <li>Baby charcuterie with sliced cheese cubes, chopped melon, whole grain crackers, and chopped cucumbers</li>
          </ul>
        </div>
        <div className="dataT3">
          <h1 className="topic3">3. Dinner</h1>
          <br />
          <ul className="listmt">
            <li>Smashed chickpea and butternut squash chili</li>
            <li>Fried rice with shredded chicken, peas, and carrots</li>
            <li>Salmon, asparagus, and peas with pasta or rice</li>
            <li>Pasta with red sauce, butter, or olive oil, and broccoli</li>
          </ul>
        </div>
        <div className="dataT4">
          <h1 className="topic4">4. Snacks</h1>
          <br />
          <ul className="listmt">
            <li>Yogurt</li>
            <li>Bananas</li>
            <li>Whole grain crackers</li>
            <li>Diced or pureed fruit</li>
            <li>Steamed and chopped vegetables</li>
            <li>Cheese cubes cut into small pieces</li>
            <li>Crackers with peanut butter or hummus</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

