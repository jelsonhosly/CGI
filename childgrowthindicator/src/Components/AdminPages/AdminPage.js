import React from 'react';
import AdminNavigationBar from './AdminNavigationBar';
import '../CSS/AdminPageStyle.css';
import babyImage from '../assets/baby.png';
import anotherImage from '../assets/baby-13512.png'; // Import another image
import Search from './Search';

export default function AdminPage() {
  const handlediv=()=>{
      console.log("success");
  }
  return (
    <div className="content1">
      <AdminNavigationBar />
      <h2>All Babies</h2>

      <div className ="Search">
        <Search></Search>
      </div>
  

      <div className='Images'>
       <div className='boxcompo' onClick={handlediv}>
       <img src={anotherImage} className="" alt="Another Image" />
        <h3>1st year</h3>
       </div>

       <div className='boxcompo'>
       <img src={anotherImage} className="" alt="Another Image" />
        <h3>1st year</h3>
       </div>

       <div className='boxcompo'>
       <img src={anotherImage} className="" alt="Another Image" />
        <h3>1st year</h3>
       </div>

       <div className='boxcompo'>
       <img src={anotherImage} className="" alt="Another Image" />
        <h3>1st year</h3>
       </div>

       <div className='boxcompo'>
       <img src={anotherImage} className="" alt="Another Image" />
        <h3>1st year</h3>
       </div>

       <div className='boxcompo'>
       <img src={anotherImage} className="" alt="Another Image" />
        <h3>1st year</h3>
       </div>

       <div className='boxcompo'>
       <img src={anotherImage} className="" alt="Another Image" />
        <h3>1st year</h3>
       </div>

       <div className='boxcompo'>
       <img src={anotherImage} className="" alt="Another Image" />
        <h3>1st year</h3>
       </div>
       <div className='boxcompo'>
       <img src={anotherImage} className="" alt="Another Image" />
        <h3>1st year</h3>
       </div>
       <div className='boxcompo'>
       <img src={anotherImage} className="" alt="Another Image" />
        <h3>1st year</h3>
       </div>
       <div className='boxcompo'>
       <img src={anotherImage} className="" alt="Another Image" />
        <h3>1st year</h3>
       </div>
       <div className='boxcompo'>
       <img src={anotherImage} className="" alt="Another Image" />
        <h3>1st year</h3>
       </div>
       <div className='boxcompo'>
       <img src={anotherImage} className="" alt="Another Image" />
        <h3>1st year</h3>
       </div>
       <div className='boxcompo'>
       <img src={anotherImage} className="" alt="Another Image" />
        <h3>1st year</h3>
       </div>
       <div className='boxcompo'>
       <img src={anotherImage} className="" alt="Another Image" />
        <h3>1st year</h3>
       </div>
       <div className='boxcompo'>
       <img src={anotherImage} className="" alt="Another Image" />
        <h3>1st year</h3>
       </div>
     


      </div>  
        {/* Add more images as needed */}
      
    </div>
  );
};
