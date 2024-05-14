import React, { useEffect, useState } from 'react';
import feedingImage1 from './feeding-image1.jpg';
import feedingImage2 from './feeding-image2.jpg';
import feedingImage3 from './feeding-image3.jpg';
import feedingImage4 from './feeding-image4.jpg';
import feedingImage5 from './feeding-image5.jpg';
function Feeding() {
  const [currentAgeGroup, setCurrentAgeGroup] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const ageGroups = [
    {
      title: "Breastfeeding (0-6 months)",
      image: feedingImage1,
      content: "Only breastfeed. Breastfeed whenever the baby asks, both day and night. Monitor baby's growth and urine output to ensure they are receiving enough milk. For working mothers, express breast milk for caregivers to feed the baby."
    },
    {
      title: "Introducing Solid Foods (6+ months)",
      image: feedingImage2,
      content: "Start introducing solid foods alongside breast milk. Begin with well-cooked rice paste mixed with breast milk, gradually increasing the variety of foods and textures."
    },
    {
      title: "Diversifying Diet (7-9 months)",
      image: feedingImage3,
      content: "Continue feeding a variety of mashed and finely chopped foods. Add coconut milk or oil while cooking. Offer 2-3 main meals a day with snacks in between."
    },
    {
      title: "Finger Foods and Variety (10-12 months)",
      image: feedingImage4,
      content: "Introduce a wider variety of foods including finger foods. Offer 3 main meals and 1-2 snacks per day. Gradually increase portion sizes."
    },
    {
      title: "Balanced Diet (12-17 months)",
      image: feedingImage5,
      content: "Continue providing balanced meals with increasing portion sizes. Offer foods suitable for the child's age and encourage healthy eating habits."
    }
  ];

  const handleNext = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentAgeGroup(prev => (prev === ageGroups.length - 1 ? 0 : prev + 1));
      setTransitioning(false);
    }, 500);
  };

    const handlePrev = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentAgeGroup(prev => (prev === 0 ? ageGroups.length - 1 : prev - 1));
      setTransitioning(false);
    }, 500);
  };
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
