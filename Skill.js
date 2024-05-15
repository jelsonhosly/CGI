import './CSS/main2.css';
import img1 from './img/img1.jpeg';
import { useState } from 'react';

export default function Skill(){
    const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const [isVisible1, setIsVisible1] = useState(true);

  
  const toggleVisibility1 = () => {
    setIsVisible1(!isVisible1);
  };

  
    return(

        <div className='content1'>
            <div className='maintopic'>SKILLFUL PARENTING</div>
            
            <p className='data'>Parenthood is an extremely fulfilling yet demanding job.'By getting the right information and knowledge, 
                you as a parent will not only enjoy it but also raise happy and well-behaved children.'</p><br/><br/>
                <img src={img1} className='im1' /><br/><br/>
     <div>
        <button onClick={toggleVisibility} className='btn'>
        {isVisible ? 'Communication : Speaking and listening' : 'Communication : Speaking and listening'}
        </button>

      {isVisible && (
        <div>
         
         <ul >
            <li className='list'>Replace negative directions with positive directions</li>
            <div>Children are more likely to agree with positive statements.  For example, if you are told not to rock the chair, 
you may be tempted to do it again.  But if you say that it is better if you sit straight in the chair, you may be tempted to listen to it.</div><br/>
            <li className='list'>Avoid talking about the child regardless of his/her presence</li>
            <div>Some parents think that if someone else hears their children's mistakes, they will not make the same mistakes in the future.  
But it doesn't close like that.  It hurts the child's heart and may disgust the parents.</div><br/>
            <li className='list'>When the child has a problem, it is not appropriate to immediately intervene and solve it</li>
            <div>Instead, try to solve the problem together with the child.  It provides the training and self-confidence needed to solve future problems.</div><br/>
            <li className='list'>Comparing child to child</li>
            <div>Some parents feel that it is appropriate to compare their child with a child who is somehow more capable than them.  This is beneficial for the child's self-esteem.  Avoid doing this.</div>
        </ul>
        </div>
      )}
    </div>
            
     <br/>


     <div>
        <button onClick={toggleVisibility1} className='btn'>
        {isVisible1 ? 'Discipline' : 'Discipline'}
        </button>

      {isVisible1 && (
        <div>
         <p >Some parents think that hitting, hitting, yellowing, etc. is the most appropriate way to discipline the child.  But it is not an efficient method.  
    A survey conducted in Sri Lanka has revealed that many mental problems occur in children due to years of labor.  
    There are other alternative breeding methods that have been proven to give the desired good results.
</p>
         <ul>
            <li className='list'>Action is more prominent than variables</li>
            <div>Teach by example what you expect from your children.  For example, if you want to practice saying thank you, say thank you as soon as it's passed for you.
  Attention and neglect</div><br/>
            <li className='list'>Avoid talking about the child regardless of his/her presence</li>
            <div>Some parents think that if someone else hears their children's mistakes, they will not make the same mistakes in the future.  
But it doesn't close like that.  It hurts the child's heart and may disgust the parents.</div><br/>
            <li className='list'> Attention and neglect</li>
            <div>Reject the child's bad behavior.  Focus on good behavior.  They repeat attention-seeking behaviors.  But remember that even shouting or
 beating with a cane is an attention-getting behavior, children are anxious to get attention for a few minutes by shouting rather than 
 not getting attention at all.  It is very important to pay attention to the good habits of the child.  Praise her when the child closes 
 a book silently.  Remember the principle that attention repeats behavior</div><br/>
            <li className='list'>Limitation</li>
            <div>Setting limits is a good way to discipline children.  For example, if you should avoid using the television set 
            after 7 pm, inform the child calmly as usual.  If the child asks you to watch it for another time, remind them of the TV viewing period 
            and tell them to turn off the TV.  But it should be done without anger or frustration</div><br/>
            <li className='list'> Notes and prizes</li>
            <div>SA good way to show your child that you appreciate his good deeds is to keep notes.  For example, it can be noted whether the child 
finished his dinner properly.  It is also possible to give a gift for such an occasion by using one star each - when several stars 
come together.  This method is more appropriate for younger children than for older children.</div><br/>
            <li className='list'>giving time</li>
            <div >Another way is to control the child's emotions and give the child time to think about what he did not so well.  
For this, the child should choose an environment where he cannot do things that may disturb him.  An empty corner of a room, 
a room with few things are suitable examples. In case the child cannot be controlled, make him or her sit or stand for a short time 
(depending on the child's age) in this pre-selected place.</div>
        </ul>
        </div>
      )}
    </div>
            
     <br/>

  
 <div className="topic1">A few general rules about fear</div>
        <ol>
            <li>Both parents should agree on the methods used to discipline their children.</li>
            <li>Punishment for the same mistake should be the same for all children.</li>
            <li>Avoid multiple threats.  Do what is said, say only what is possible</li>
            <li>Do not make unreasonable demands on children, be considerate of their age and opportunity.  
                For example, a three-year-old child cannot be expected to eat without spilling on the table.</li>
            <li>Talk and interact with children.  Make it clear what is expected of them.  Have a logical conversation 
                with older children and be calm when speaking.</li>
        </ol>
            
</div>

       
    )
}