import React from 'react';
import './style1.css'; // Import your CSS file

// Import your images from the assets folder
import logo from './assets/logo.png';
import d4Image from './assets/d4.jpg';
import d5Image from './assets/d5.jpg';

function Growth2() {
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
                <div className="row" id="row1">
                    <h1>Grow Up Baby With Layers</h1>
                    <br /><br />
                    <p>
                        By 3 months old, your baby has probably grown significantly since birth.
                        In fact, some babies will have doubled their birth weight! (The general
                        rule of thumb, though, is that babies double their birth weight by 4 months
                        and triple their birth weight by 1 year.) If you're wondering how much a
                        3-month-old should weigh, rest assured that your child's healthcare provider
                        will make sure your baby's growth is on track at well-baby visits.
                    </p>
                    <br /><br />
                    <img src={d5Image} alt="Baby" id="d5" />
                </div>

                <div className="row" id="row2">
                    <img src={d4Image} alt="Baby" id="d4" />
                    <br /><br /><br />
                    <table className="gentable">
                        <tr>
                            <th>Baby Boy:</th>
                            <th>Baby Girl:</th>
                        </tr>
                        <br />
                        <tr>
                            <td>Average weight for a 3-month-old: 14 pounds 2 ounces</td>
                            <td>Average weight for a 3-month-old: 12 pounds 13 ounces</td>
                        </tr>
                        <tr>
                            <td>Average length for a 3-month-old: 24 inches</td>
                            <td>Average length for a 3-month-old: 23 1/2 inches</td>
                        </tr>
                    </table>
                </div>
            </div>
            {/* Footer */}
              <div className="footer">
                    <center><p>©2023 Child Growth Indicator | All Rights Reserved</p></center>
              </div>
        </div>
    );
}

export default Growth2;
