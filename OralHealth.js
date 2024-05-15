import './CSS/main2.css';
import v1 from './vedio/oral.mp4';
import { useState } from 'react';

export default function OralHealth(){
    const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const [isVisible1, setIsVisible1] = useState(true);

  const toggleVisibility1 = () => {
    setIsVisible1(!isVisible1);
  };
  

    return(
        

        <div className="content1">
            <div className="maintopic">ORAL HEALTH</div><br/><br/>
            
            <div>
            We need to take care of our teeth throughout our life. Therefore, you should start taking care of your teeth from the first bite. 
Parents have the primary responsibility of inculcating good health habits in their children. Parents tell their child's teeth monthly 
to detect problems early
            </div>
            <br/><br/>

            <video className='vedio'>
                <source src={v1} ></source> 
            </video>

            <br/><br/>

    <div>
        <button onClick={toggleVisibility} className='btn'>
        {isVisible ? 'Protecting the child s oral health' : 'Protecting the child s oral health'}
        </button>

      {isVisible && (
        <div>
         
          <ul>
                <li>The first permanent tooth emerges between 6-12 months (usually 9 months or 2 years, the baby teeth are fully erupted).</li>
                <li>If the teeth do not appear by 12 months, consult a data doctor and get advice.</li>
                <li>The order in which the teeth appear may vary. Usually the lower front teeth emerge first. Up The front teeth emerge second and then the molars gradually emerge from the front to the back of the mouth.</li>
                <li>Even without teeth, the baby can eat semi-solid and soft foods with fine pieces, so follow the feeding instructions properly.</li>
                <li> By accident, a baby's teeth may have erupted at birth.  If the teeth move, there is a risk of them falling out and getting stuck in the throat.  Therefore, in cases where the teeth have erupted early, refer to the nearest dental clinic for advice.</li>
            </ul>
        </div>
      )}
    </div>
            
     <br/>

    <div>
      <button onClick={toggleVisibility1} className='btn'>
        {isVisible1 ? 'Tooth Diseases' : 'Tooth Diseases'}
      </button>

      {isVisible1 && (
         <div>
                
         <ul>
             <li>Tooth decay is the most common oral disease among young children.  Sugar in food is the main factor that causes this condition</li>
             <li>Fluoride thus strengthens teeth and makes them resistant to decay.  The proper amount of fluoride can be delivered to the surface of the tooth by using fluoride toothpaste as recommended.
                 <br/>
                 Even people in areas where the water fluoride levels are higher than optimal should still use fluoride toothpaste.
             </li>
             <li>In the initial stage of tooth decay, no discomfort is felt.  It can only be detected by examining the teeth and seeing the changes.  Then by following the right diet and health habits, further spread of this disease can be controlled.</li>
         </ul>

 </div>
      )}
    </div>
          <br/><br/> 
            <div >
            <div className='last'>Therefore, it is important to follow the following basic points to protect the oral health of young children</div>
           <ol>
            <li> Offer fresh fruits, vegetables and whole grains whenever possible.</li>
            
                <ul>
                    <li>Minimize sweets, sweets and sticky floury foods like biscuits and buns.</li>
                    <li> Avoid adding sugar to baby food and drinks. </li>
                    <li>It is best if you can brush your teeth after sticky, sweet foods.  Or practice mouthwash</li>
                    <li>Offer fresh fruits,vegetables and whole grains whenever possible</li>
                </ul>
            <br/>
            <li>Brush your child's teeth properly.</li>
            
                <ul>
                    <li> From the day the first tooth emerges, start brushing twice a day using a small-bristled, soft-bristled children's toothbrush and fluoride toothpaste.  There is no need to clean the mouth with various substances before the tooth emerges</li>
                </ul>
            
            </ol>
            </div>

        </div>
    )
}















  

  


  

  


 

  
  

 