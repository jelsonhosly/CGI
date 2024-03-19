import React from 'react';
import './style.css';
import logo from './assets/logo.png';
import i1 from './assets/b1-1.png';
import i2 from './assets/vector-6.png';
import i3 from './assets/-XxZ.png';
import i4 from './assets/vector-1.png';
import i5 from './assets/removebg-preview-1-kUm.png';
import i6 from './assets/vector-5.png';
import i7 from './assets/removebg-preview-2.png';
import i8 from  './assets/vector-3.png';
import i9 from './assets/-F8H.png';
import i10 from './assets/vector-4.png';
import i11 from './assets/removebg-preview-1.png';
import i12 from './assets/vector-1.png';
import i13 from  './assets/removebg-preview-1-tTX.png';



const BabyDev = () => {
  return (
    <div>
      {/* Header */}
      <div className="heading">
        <img src={logo} className="logo" alt="Logo" />
        <div className="navbar">
          <input type="submit" name="home" value="Home" className="b1" />
          <input type="submit" name="signin" value="Sign In" className="b2" />
          <input type="submit" name="signup" value="Sign Up" className="b3" />
          <input type="submit" name="contact" value="Contact" className="b4" />
        </div>
      </div>

      {/* Content */}
      <div className="content">
        
        <img src={i1} className="img1" alt="Image1" />
        <img src={i2} className="img2" alt="Image2" />
        <img src={i3} className="img3" alt="Image3" />

        <div className="bt1">
          <p className="row1">1</p>
          <p className="row2">month</p>
        </div>

        
        <img src={i4} className="img4" />
		<img src={i5} class="img5"/>

		<div class="bt2"><p class="row1">3</p><p class="row2">month</p></div>

		<img src={i6} class="img6"/>
		<img src={i7} class="img7"/>

		<div class="bt3"><p class="row1">5</p><p class="row2">month</p></div>

		<img src={i8} class="img8"/>
		<img src={i9} class="img9"/>


		<div class="bt4"><p class="row1">6</p><p class="row2">month</p></div>

		<img src={i10} class="img10"/>
		<img src={i11} class="img11"/>

		<div class="bt5"><p class="row1">9</p><p class="row2">month</p></div>

		<img src={i12} class="img12"/>
		<img src={i13} class="img13"/>

		<div class="bt6"><p class="row1">12</p><p class="row2">month</p></div>
  

        <p className="para">
          ' Every Child Is Like A Different Kind Of Flower & All Together ,Make This World A Beautiful Garden! '
        </p>
      </div>

      {/* Topic */}
      <div className="topic">
        <h1 className="t1">baby</h1>
        <h1 className="t2">development</h1>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="mid">
          <div className="f1">
            <img src={logo} className="footerlogo" alt="Footer Logo" />
          </div>
          <div className="f1">
            <ul>
              <li><a href="signup.html">Sign up</a></li>
              <li><a href="signin.html">Sign in</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li><a href="home.html">Home</a></li>
            </ul>
          </div>
          <div className="f1">
            <ul>
              <li><a href="year1.html">Year 1</a></li>
              <li><a href="year2.html">Year 2</a></li>
              <li><a href="year3.html">Year 3</a></li>
              <li><a href="year4.html">Year 4</a></li>
            </ul>
          </div>
          <div className="f1">
            <ul>
              <li><a href="year1.html">Year 1</a></li>
              <li><a href="year2.html">Year 2</a></li>
              <li><a href="year3.html">Year 3</a></li>
              <li><a href="year4.html">Year 4</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BabyDev;
