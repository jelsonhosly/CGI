import './CSS/main.css'; 
import baby1 from './img/baby1.jpg';
import logo from './img/logo.png';
import feeding from './img/feeding.jpeg';
import vaccination from './img/vaccination.jpg';
import growth from './img/growth.jpg';
import movement from './img/movement.jpg';
import worm from './img/worm.jpg';



export default function Month1(){
    return(
        <>
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
      </div>

      <div className="content">
        <div className="month">
          <img src={baby1} className='month1baby'/>
          <div className="name1">1<br />Month</div>
          <div className="descriptionmonth">
            <p>Your baby is unique (you knew that, of course!) and it’s normal for them to grow at their own pace. Don’t be surprised if your baby’s development in one area seems to lag for a few weeks, only for them to catch up soon after. Here are some of the baby milestones to look forward to now that your baby is 1 month old.</p>
          </div>
        </div>

        <div className="detail">
      <button><img src={growth} className="growth" alt="Growth Of Baby" title="Growth Of Baby" /> </button>
      <button><img src={movement} className="movement" alt="Movements" title="Movements" /> </button>
      <button><img src={feeding} className="feeding" alt="Feeding" title="Feeding" /></button>
      <button><img src={vaccination} className="vaccination" alt="Vaccination" title="Vaccination" /></button>
      <button><img src={worm} className="worm" alt="Worms In Baby" title="Worms In Baby" /></button>

        </div>
        </div>
        </>
    )
}