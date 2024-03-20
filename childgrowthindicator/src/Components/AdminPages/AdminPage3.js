import React from 'react';
import AdminNavigationBar from './AdminNavigationBar';
import '../CSS/AdminPageStyle.css';
import babyImage from '../assets/baby.png';
import anotherImage from '../assets/baby-13512.png'; // Import another image
import Search from './Search';
import Linechart from './ChartIndicator'
import '../CSS/AdminPage3Style.css'
export default function AdminPage3() {

  
  return (
    <div className="content1">
      <AdminNavigationBar />
      <div className='chart'>
      <Linechart/>
      </div>
   

     
        {/* Add more images as needed */}
      
        </div>  
  );
};
