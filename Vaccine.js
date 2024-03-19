import React from 'react';
import './style1.css'; // Import your CSS file
import logo from './assets/logo.png'; // Import your logo image
import d14 from './assets/d14.jpg'; // Import your d14 image
import d13 from './assets/d13.webp'; // Import your d13 image
import d15 from './assets/d15.jpg'; // Import your d15 image
import d10 from './assets/d10.jpg'; // Import your d10 image
import clip from './assets/clip.mp4'; // Import your video clip

function Vaccine() {
  return (
    <>
      <div className="heading">
        <img src={logo} alt="Logo" className="logo" />
        <div className="navbar">
          <input type="submit" name="home" value="Home" className="b1" />
          <input type="submit" name="signin" value="Sign In" className="b2" />
          <input type="submit" name="signup" value="Sign Up" className="b3" />
          <input type="submit" name="contact" value="Contact" className="b4" />
        </div>
      </div>
      <div className="content1">
        <h1 className="ch1">Let's VACCINE</h1>
        <div className="biggerimage" id="bi1">
          <p>Vaccines are like shields for your body. They help you stay healthy by creating immunity to diseases.</p>
          <br />
          <p>Here's how it works:</p>
          <br />
          <ul>
            <li>Disease introduction: When you come across a virus or bacteria for the first time, your body might get sick. This is because your immune system hasn't yet figured out how to fight it.</li>
            <br />
            <li>
              Vaccine training: Vaccines introduce a weakened or inactive form of the virus or bacteria into your body. Think of it like a practice round for your immune system.
            </li>
            <br />
            <li>
              Immune system memory: Your body recognizes the weakened germ and learns how to fight it. This creates antibodies, special proteins that can quickly target and destroy the real disease if you ever encounter it.
            </li>
          </ul>
          <br />
          <br />
          <img src={d14} className="v1" />
          <img src={d14} className="v2" />
          <img src={d13} className="v1" />
          <img src={d13} className="v2" />
          <img src={d15} className="v1" />
          <img src={d15} className="v2" />
          <img src={d10} className="v1" />
          <img src={d10} className="v2" />
          <br /><br />
          <br />
          <p>You can refer,</p>
        </div>
        <div className="biggerimage" id="bi2">
          <table className="vtable" border="1">
            <tr>
              <th>AGE</th>
              <th>VACCINE/S</th>
              <th>AGAINST</th>
            </tr>
            <tr></tr>
            <tr>
              <td>Birth/0-4 weeks(**preferably within 24 hours of birth)</td>
              <td>BCG</td>
              <td rowspan="11" className="sp">
                <p><b>BCG: </b></p>
                <p>Protects against severe tuberculosis (TB), especially in young children. TB can be fatal if not treated. (<a href="https://www.who.int/teams/health-product-policy-and-standards/standards-and-specifications/vaccines-quality/bcg">More Info</a>)</p><br />
                <p><b>Oral Polio Vaccine (OPV):</b></p>
                <p>Protects against polio, a crippling and potentially deadly disease. Polio can cause paralysis and even death. (<a href="https://www.who.int/teams/health-product-policy-and-standards/standards-and-specifications/vaccines-quality/poliomyelitis">More Info</a>)</p><br />
                <p><b>DTP-HepB-Hib:</b></p>
                <p>Protects against diphtheria, tetanus, pertussis (whooping cough), hepatitis B, and Haemophilus influenzae type b (Hib). These diseases can all be serious, and some can be fatal. (<a href="https://www.cdc.gov/vaccines/vpd/dtap-tdap-td/public/index.html">More Info</a>)</p><br />
                <p><b>Fractional IPV: </b></p>
                <p>Protects against polio (like OPV but with a different formulation). This is sometimes used to complete the polio vaccination series after starting with OPV.(<a href="https://www.pmda.go.jp/files/000266951.pdf">More Info</a>)</p><br />
                <p><b>MMR (Measles, Mumps, Rubella):</b></p>
                <p>Protects against measles, mumps, and rubella. Measles can be serious, and mumps can lead to deafness or other complications. Rubella during pregnancy can cause serious birth defects. (<a href="https://www.cdc.gov/vaccines/vpd/mmr/public/index.html">More Info</a>)</p><br />
                <p><b>Japanese Encephalitis:</b></p>
                <p>Protects against Japanese encephalitis, a mosquito-borne virus that can cause brain inflammation. This disease can be fatal or cause permanent disability. (This vaccine may not be routinely recommended depending on your location).(<a href="https://www.cdc.gov/vaccines/vpd/j-enceph/index.html">More Info</a>)</p><br />
              </td>
            </tr>
            <tr></tr>
            <tr>
              <td>2 months</td>
              <td>
                <ul>
                  <li>Oral Polio Vaccine_OPV (1st dose)</li>
                  <li>DTP-HepB-Hib (1st dose)</li>
                  <li>Fractional IPV (1st dose)</li>
                </ul>
              </td>
            </tr>
            <tr></tr>
            <tr>
              <td>4 months</td>
              <td>
                <ul>
                  <li>Oral Polio Vaccine_OPV (2nd dose)</li>
                  <li>DTP-HepB-Hib (2nd dose)</li>
                  <li>Fractional IPV (2nd dose)</li>
                </ul>
              </td>
            </tr>
            <tr></tr>
            <tr>
              <td>6 months</td>
              <td>
                <ul>
                  <li>Oral Polio Vaccine_OPV (3rd dose)</li>
                  <li>DTP-HepB-Hib (3rd dose)</li>
                </ul>
              </td>
            </tr>
            <tr></tr>
            <tr>
              <td>9 months</td>
              <td>MMR_(Measles,Mumps,Rubella) (1st dose)</td>
            </tr>
            <tr></tr>
            <tr>
              <td>12 months</td>
              <td>Jap B_Encephalitis(JE)</td>
            </tr>
          </table>
        </div>
        <div className="biggerimage" id="bi1">
          <p><b>If you don't get vaccinated, you're more likely to get sick from the disease. This can lead to serious complications, some even life-threatening. </b></p><br />
          <ul>
            <li>
              Measles: Measles can cause pneumonia, swelling of the brain, and even death.
            </li><br />
            <li>Mumps: Mumps can lead to deafness, meningitis (inflammation of the membranes around the brain and spinal cord), and inflammation of the testicles or ovaries.</li><br />
            <li>
              Whooping cough: Whooping cough can cause severe coughing fits that make it hard to breathe, eat, or sleep. In babies, it can lead to pneumonia and death.
            </li><br />
          </ul>
          <br />
          <p className="note"><b>Note : </b></p>
          <p>You should get a vaccine schedule card from the hospital you go to, and this will be referred back to each time you go for a new vaccination. Some vaccine doses will change between private hospitals and government hospitals, so it is always recommended to meet your pediatrician before getting the next scheduled vaccine.</p>
          <br /><br />
          <center>
            <video controls autoplay width="1000" height="500">
              <source src={clip} type="video/mp4" className="vclip" />
            </video>
          </center>
        </div>
      </div>
    </>
  );
}

export default Vaccine;
