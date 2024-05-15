import React from 'react';
import './style1.css'; // Import your CSS file
import logo from './assets/logo.png'; // Import your logo image
import d7 from './assets/d7.jpg'; // Import your d7 image

function Growth5() {
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
                  <img src={d7} alt="Image" id="d7" />
              </div>
              <div className="row" id="row2">
                  <br /><br /><br />
                  <h1>
                      <pre>
                          watching <br />
                          a baby grow <br />
                          is like seeing <br />
                          a FLOWER BOOM,
                      </pre>
                  </h1><br/><br/>
                  <p id="row2para">
                      At 5 months old, your baby is growing by the day – and exciting things are on the horizon, like sitting up and trying solid foods. Right now, your baby is at the adorable stage between cuddly newborn and active baby, so soak it all in. Here's what to look forward to this month.
                  </p>
              </div>
              <div className="row3">
                  <p>* How much should a 5-month-old weigh? Every baby is different, but in general,</p>
                  <table className="gentable">
                      <tr>
                          <th>Baby Boy :</th>
                          <th>Baby Girl :</th>
                      </tr>
                      <br />
                      <tr>
                          <td>Average weight for a 5-month-old: 16 pounds 9 ounces</td>
                          <td>Average weight for a 5-month-old: 15 pounds 3 ounces</td>
                      </tr>
                      <tr>
                          <td>Average length for a 5-month-old: 26 inches</td>
                          <td>Average length for a 5-month-old: 25 1/4 inches</td>
                      </tr>
                  </table>
              </div>
    {/* Footer */}
      <div className="footer">
        <center><p>©2023 Child Growth Indicator | All Rights Reserved</p></center>
      </div>
          </div></>
  );
}

export default Growth5;
