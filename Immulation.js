import React from 'react';
import './Style.css'; // Assuming you have a Style.css file for styling
import image  from './v.mp4';


function Immulation() {
  return (
    <div className="container">
      <h1 className="headings">Immunization and nutritional supplements</h1><br/>
      <div className="para">
        <p>
          Children's health services offer many special interventions to promote the health, growth and development of a child. The prenatal immunization program, vitamin A supplementation, micronutrients and in some areas preventive treatment are some of them.
        </p><br/>
        <h3>Immulation</h3><br/>
        <table className="ImTable">
          <tr>
            <th>Age</th>
            <th>Vaccine</th>
            <th>Preventable diseases</th>
          </tr>
          <tr>
  					<td>At birth</td>
  					<td>B.C.G. vaccine</td>
  					<td>Diseases affecting children and children</td>
  				</tr>
  				<tr>
  					<td>On completion of 2 months</td>
  					<td>
  						<ul>
  							<li>Pentavalent vaccine I</li>
							<li>Polio vaccine I</li>
							<li>Alive polio vaccine I</li>
  						</ul>
  					</td>
  					<td rowspan="3">
  						<ul>
  							<li>Polio</li>
							<li>Galapatala</li>
							<li>Outpouring</li>
							<li>whooping cough</li>
							<li>Hepatitis B</li>
							<li>Haemophilus influenzae B disease</li>
  						</ul>
  					</td>
  				</tr>
  				<tr>
  					<td>On completion of 4 months</td>
  					<td>
  						<ul>
  							<li>Pentavalent vaccine II</li>
							<li>Polio vaccine II</li>
							<li>Alive polio vaccine II</li>
  						</ul>
  					</td>
  				</tr>
  				<tr>
  					<td>On completion of 6 months</td>
  					<td>
  						<ul>
  							<li>Pentavalent vaccine III</li>
							<li>Polio vaccine III</li>
  						</ul>
  					</td>
  				</tr>
  				<tr>
  					<td>On completion of 9 months</td>
  					<td>Measles,Cheeky,Rubella I</td>
  					<td>Measles,Cheeky,Rubella</td>
  				</tr>
  				<tr>
  					<td>On completion of 12 months</td>
  					<td>Japanese sleeping sickness</td>
  					<td>Japanese sleeping sickness</td>
  				</tr>
  				<tr>
  					<td>On completion of 18 months</td>
  					<td>
  						<ul>
  							<li>Polio vaccine IV</li>
  							<li>The triple vaccine</li>
  						</ul>
  					</td>
  					<td>
  						<ul>
  							<li>Polio</li>
  							<li>Galapatala</li>
							<li>Outpouring</li>
  						</ul>
  					</td>
  				</tr>
  				<tr>
  					<td>On completion of 3 years</td>
  					<td>Measles,Cheeky,Rubella II</td>
  					<td>Measles,Cheeky,Rubella </td>
  				</tr>
  				<tr>
  					<td>On completion of 5 years</td>
  					<td>
  						<ul>
  							<li>Polio Vaccine V</li>
  							<li>Double vaccination</li>
  						</ul>
  					</td>
  					<td>
  						<ul>
  							<li>Polio</li>
  							<li>Galapatala</li>
  							<li>Outpouring</li>
  						</ul>
  					</td>
  				</tr>
  				<tr>
  					<td>On completion of 10 years (For baby girls)</td>
  					<td>
  						<ul>
  							<li>HPV vaccine I</li>
  							<li>HPV vaccine II (6 months after first dose)</li>

  						</ul>
  					</td>
  					<td>Cervical cancer</td>
  				</tr>
  				<tr>
  					<td>On completion of 11 years</td>
  					<td>
  						ATD vaccine
  					</td>
  					<td>Galapatala,Outpouring</td>
  				</tr>
  				<tr>
  					<td></td>
  					<td>Other</td>
  					<td>Diseases that are at risk of transmission</td>
  				</tr>
        </table>
        <br/>
        <p>
          The vaccines given to your child are of the highest quality. It is not unusual to have minor side effects after vaccinations (ex:- injection site redness, swelling, lump under the skin, mild fever, rash), and these minor side effects do not require special treatment. Very rarely, side effects can occur that require hospitalization (ex:- fever, convulsions or severe allergic reactions, difficulty breathing, rash). Report any side effects after that to the Family Health Service Officer/Public Health Inspector, Public Health Inspector/Public Health Nurse/Physician or the doctor who administered the vaccine.
        </p><br/>
        <h3>Vitamin A overdose</h3>
        <p className="desc">
          Full-term birth weight babies will be given vitamin A overdose every 6 months from 6 months of age. This is important for good eyesight and protection from diseases.
        </p><br/>
        <h3>White nutritional supplement packets</h3>
        <p className="desc">
          These micronutrient supplement packets for normal birth weight children born at full term will be provided by the Child Clinic or Family Health Services Director at the completion of 6, 12 and 18 months of age. It contains 16 other vitamins and minerals, including iron, which are necessary for the development of children's intelligence, learning ability and health.
          For children born before 37 weeks/birth weight less than 2.5 kg, iron and vitamins are provided daily up to 2 years by the respective hospital clinics.
        </p><br/>
        <h3>Prevention of worm diseases</h3>
        <p className="desc">
          According to the district recommendations, it is important to give this worm prevention treatment to the child from 1 to 5 years to protect the child's nutritional status and health.
        </p>
        <br/>
        <center>
          <video width="800" height="500" controls>
            <source src={image} type="video/mp4" />
            ERROR
          </video>
        </center>
      </div>
    </div>
  );
}

export default Immulation;
