import React, { useEffect, useState } from 'react';
import feedingImage1 from './feeding-image1.jpg';
import feedingImage2 from './feeding-image2.jpg';
import feedingImage3 from './feeding-image3.jpg';
import feedingImage4 from './feeding-image4.jpg';
import feedingImage5 from './feeding-image5.jpg';

  return (
    <div>
    <div className="container1">
      <div className="content1">
        <h1>FEEDING GUIDE FOR CHILDREN</h1>
        <div className="note">
          <p>
            Please note that these are general instructions for all children 
            and may vary according to each child's developmental status. 
            The amount and number of servings to be given to the child in 
            one meal and the amount of oil to be added while preparing the 
            food may vary from child to child.
          </p>
        </div>
        </div> 
       </div>
    <div className="container">
      <div className="content">
        <div className="arrows">
          <div className="arrow left" onClick={handlePrev}>
            &lt;
          </div>
        </div>
        <div className={`age-group ${transitioning ? 'transitioning' : ''}`}>
          <h2>{ageGroups[currentAgeGroup].title}</h2>
          <img src={ageGroups[currentAgeGroup].image} alt={ageGroups[currentAgeGroup].title} className="topic-image" />
          <p>{ageGroups[currentAgeGroup].content}</p>
        </div>
        <div className="arrows">
          <div className="arrow right" onClick={handleNext}>
            &gt;
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Feeding;
