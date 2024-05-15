// DevelopmentGuide.js
import React, { useState } from 'react';
import './Style.css'; // Import your CSS file
import image  from './list1.jpeg';

const Testing=()=> {
  


    const months = [
        { month: '1', description: [
            '- Cuddling, talking, and playing with the baby during feeding, dressing, and other daily activities.',
            '- Encourage the baby by imitating their sounds and responding positively.',
            '- Read and sing to the baby frequently to stimulate language development.',
            '- Introduce colorful toys and objects to engage the baby visually.',
            '- Promote physical development by encouraging the baby to reach for toys and move limbs.',
        ]},
        { month: '4', description: [
            '- Hold and talk to the baby to create a sense of security and bond.',
            '- Establish consistent sleeping and feeding routines to promote stability.',
            '- Encourage the baby to explore their surroundings and interact with toys.',
            '- Introduce simple games like peek-a-boo and hide-and-seek to promote cognitive development.',
            '- Promote physical development by supporting the baby in sitting and encouraging reaching and grasping.',
        ]},
        { month: '6', description: [
            '- Engage in daily floor play sessions to promote motor skills and interaction.',
            '- Observe and respond to the baby’s emotional cues, providing comfort and reassurance as needed.',
            '- Encourage self-soothing behaviors like finger sucking for comfort.',
            '- Participate in the baby’s imaginative play, mirroring their actions and sounds.',
            '- Read aloud to the baby daily to stimulate language development and comprehension.',
        ]},
        { month: '9', description: [
            '- Be attentive to the child’s behavior in unfamiliar situations and in front of visitors, offering comfort and happiness-inducing activities.',
            '- As the baby becomes more mobile, maintain close supervision and establish predictable routines.',
            '- Engage in interactive games that involve turn-taking and emotional awareness.',
            '- Encourage language development by labeling the child’s emotions and narrating activities.',
            '- Provide opportunities for cause-and-effect learning through simple actions and reactions.',
        ]},
        { month: '12', description: [
            '- Allow the child to spend quality time with caregivers other than parents to promote socialization.',
            '- Offer a comforting object, like a favorite toy or blanket, to provide security during transitions.',
            '- Set clear boundaries for behavior, using positive reinforcement and brief timeouts for misbehavior.',
            '- Express affection through hugs, kisses, and praise for desirable behavior.',
            '- Describe daily activities to enhance language skills and understanding of routines.',
        ]},
        { month: '18', description: [
            '- Create a nurturing and child-friendly environment in the home, emphasizing safety and comfort.',
            '- Acknowledge and reinforce positive behaviors rather than focusing on negative actions.',
            '- Help the child recognize and express emotions by verbalizing feelings during daily interactions.',
            '- Encourage imaginative play activities, such as playing house or pretending to shop.',
            '- Foster empathy by modeling and teaching comforting behaviors towards others in distress.',
        ]},
        { month: '24', description: [
            '- Encourage the child’s participation in household chores, providing simple tasks suited to their abilities.',
            '- Supervise playtime with other children, facilitating sharing and cooperation.',
            '- Offer praise and attention for desired behaviors, while minimizing attention for negative actions.',
            '- Teach the child basic safety rules and personal information like phone numbers and addresses.',
            '- Engage the child in interactive storytelling and encourage prediction and reflection on story events.',
        ]},
        { month: '36', description: [
            '- Arrange playdates and outings to foster social interaction with peers.',
            '- Support problem-solving efforts by offering guidance and encouragement.',
            '- Help the child recognize and discuss emotions, using age-appropriate language and visual aids.',
            '- Establish and enforce consistent rules and boundaries, reinforcing positive behavior.',
            '- Introduce simple tasks with multiple steps to enhance cognitive skills and independence.',
        ]},
        { month: '48', description: [
            '- Engage in pretend play scenarios where the child takes on different roles and responsibilities.',
            '- Address fears or anxieties by encouraging role-playing and discussing potential solutions.',
            '- Empower the child with decision-making opportunities within appropriate limits.',
            '- Provide context and sequencing language to help the child understand the order of events.',
            '- Encourage curiosity and critical thinking through open-ended questions and discussions.',
        ]},
        { month: '60', description: [
            '- Facilitate social interactions by organizing outings to parks and playgrounds with other children.',
            '- Establish clear expectations for behavior, reinforcing positive actions and calmly addressing misbehavior.',
            '- Educate the child about body safety and personal boundaries in an age-appropriate manner.',
            '- Teach time-related concepts like days of the week and daily routines.',
            '- Encourage exploration and learning through hands-on activities and independent discovery.',
        ]}
    ];

    //const [showDescription, setShowDescription] = useState(Array(months.length).fill(false));
    const [description, setDescription] = useState([]);
    const [trigger, setTrigger] = useState(false);
    const [clickedIndex, setClickedIndex] = useState(null);
    const toggleDescription = (e, index) => {
      const clicked = months.find(monthData => monthData.month === e);
      setDescription(clicked.description);
      setClickedIndex(index);
  };

  
    return (
      <div className="container"><br></br>
          <h1 className="headings">PSYCHOLOGICAL DEVELOPMENT</h1><br></br>
          <div className="div1">
              Parents and caregivers have a huge role to play in maximizing a child's psychosocial development by providing age-appropriate stimulation and assessment of hearing, vision, and growth.
          </div>
          <h3>What can be done to improve development in each age range from birth to 5 years</h3>
          <p>
              Stimulation should be given only when the child is ready and should not be forced if the child shows reluctance. By forcing it, the overall development of the child can be stunted.
          </p>
          <center><img src={image} id="listImage" alt="List" /></center>
          <div className="gallery">
              {months.map((monthData, index) => (
                  <div key={index} className={`toggleImage ${clickedIndex === index ? 'active' : ''}`} onClick={() => toggleDescription(monthData.month,index)} style={{ display: 'inline-block' }}>
                      <center><p>month</p></center>
                      <center><h2 className="monthnumber">{monthData.month}</h2></center>
                  </div>
              ))}
              
                  
             
          </div><br></br><br></br>
          <div className="description">
                    <ul>
                    {description.map((desc, index) => (
                      <li key={index}>{desc}</li>
                    ))}

                     </ul>
                  </div>
      </div>
  );
}

export default Testing;
