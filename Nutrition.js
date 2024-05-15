import React from 'react';
import './Style.css'; // Assuming you have a Style.css file for styling

function Nutrition() {
  return (
    <div className="container"> 
      <h1 className="headings">GROWTH AND NUTRITION</h1><br/>
      <div>
        Measuring the child's weight, length and height systematically and listening to the growth pattern and at the same time accustoming the child to the age-appropriate diet is the main intervention to promote the growth and development of the child.
      </div><br/>
      <h3>Measuring the child's growth:</h3>
      <p className="dpara">
        In the first 5 years of a child's growth, it is essential to follow the instructions in this book. Your family health worker will mark the measurements on the growth charts in this book to see if the baby is growing properly. If this does not happen, she will be able to find out the reasons for it and give advice at the first time it is detected. Following the instructions in that way will be able to correct the growth again.
      </p><br/>
      <h3>Measuring the baby's weight:</h3>
      <p className="dpara">For a child who is gaining weight satisfactorily, weight should be measured monthly in the first 2 years and then every three months until the age of 5 years. If weight gain is not satisfactory, monthly weight regain is essential regardless of age.</p><br/>
      <h3>Measure child's length/height</h3>
      <p className="dpara">A child up to 2 years of age is measured in stretched length, and in the case of a child of 2 years or older, standing height is also measured. A child whose length/height is growing satisfactorily should be measured at four months, one year and one and a half years, and then every six months. If the increase in length/height is not satisfactory, the length and height of such children should be measured at less frequent intervals. Eg:- Once in two months for a child under two years of age and once in three months for a child above two years of age.</p><br/>
      <h3>Growth Charts for Preschool Children:</h3>
      <p className="dpara">If your baby was born prematurely, i.e. before 37 weeks, the baby's growth for the first 6 months will be marked on special growth charts. These growth charts are issued by the hospital as per the doctor's prescription.</p><br/>
      <div className="fdiv">
        <h3>Family organization:</h3>
        <p>By the time the baby is 6 weeks old, see a Family Health Service Officer/Public Health Nurse/Hygiene Officer/Doctor and start using your chosen family planning method. By doing this you can improve the growth and development of this child by delaying the next child birth.</p>
      </div><br/>
    </div>
  );
}

export default Nutrition;
