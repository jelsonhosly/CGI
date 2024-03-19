import React from 'react';
import './style1.css'; // Import your CSS file
import logo from './assets/logo.png'; // Import your logo image
import d8 from './assets/d8.webp'; // Import your d8 image

function Growth6() {
  return (
    <><div className="heading">
          <img src={logo} alt="Logo" className="logo" />
          <div className="navbar">
              <input type="submit" name="home" value="Home" className="b1" />
              <input type="submit" name="signin" value="Sign In" className="b2" />
              <input type="submit" name="signup" value="Sign Up" className="b3" />
              <input type="submit" name="contact" value="Contact" className="b4" />
          </div>
      </div><div className="content">
              <div className="row" id="row1">
                  <center><img src={d8} alt="Image" id="d8" /></center>
              </div>
              <div className="row" id="row2">
                  <h1 id="m6h1">
                      <pre>
                          Life's greatest gift is <br />
                          the joy of watching a <br />
                          BABY GROW
                      </pre>
                  </h1>
                  <br /><br /><br />
                  <p>
                      How much should a 6-month-old weigh? At this age, babies can vary quite a bit. Here are some averages:
                  </p>
                  <table className="gentable">
                      <tr>
                          <th>Baby Boy :</th>
                          <th>Baby Girl :</th>
                      </tr>
                      <br />
                      <tr>
                          <td>Average weight for a 6-month-old: 17 pounds 7 ounces</td>
                          <td>Average weight for a 6-month-old: 16 pounds 2 ounces</td>
                      </tr>
                      <tr>
                          <td>Average length for a 6-month-old: 26 1/2 inches</td>
                          <td>Average length for a 6-month-old: 26 inches</td>
                      </tr>
                  </table>
                  <br /><br />
                  <p>
                      Your baby has been putting on weight at a pretty fast pace for the past 6 months. But from 6 to 9 months, your baby's growth rate will naturally slow down. That's partly because your active baby is expending more energy, but also just how we're built.
                  </p>
                  <br />
                  <p>
                      * If you have any concerns about your baby's weight or growth, be sure to talk to their healthcare provider.
                  </p>
              </div>
              <div className="row3">

              </div>
          </div></>
  );
}

export default Growth6;
