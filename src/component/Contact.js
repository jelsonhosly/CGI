import React, { useState } from 'react'
import './contact.css'
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function Contact() {
    const [Name, setName]=useState('');
    const [ChildName, setChildName]=useState('');
    const [Email, setEmail]=useState('');
    const [message, setMessage]=useState('');
  return (
    <div className="contactContainer">
        <div className="contactLeft">
            <span className='Text'>
                Contact Us
                </span>
                <p className='text'>
                Have questions or need assistance? We’re here to help!
                </p>
                
                <div className="iconContainer">
              <li className="Icons">
                        <HomeIcon className='Icon'/> 
                    <span className='IconText'>Our Location</span>
                    <p className="dis">Test</p>
              </li>

              <li className="Icons">
                        <CallIcon className='Icon'/> 
                    <span className='IconText'>Telephone</span>
                    <p className="dis">+9477 123 4567</p>
              </li>

              <li className="Icons">
                        <MailOutlineIcon className='Icon'/> 
                    <span className='IconText'>Email</span>
                    <p className="dis">test123@mail.com</p>
              </li>
            </div>

        </div>

        <div className="middle">

        </div>

        <div className="contactRight">
            <form>
                <div className="formContainer">

                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder='Name'
                        value={Name}
                            onChange={(e)=>setName(e.target.value)} />

                
                    <input
                        type="text"
                        name="childname"
                        id="childname"
                        placeholder="Child's Name"
                        value={ChildName}
                            onChange={(e)=>setChildName(e.target.value)}  />

                
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder='Email'
                        value={Email}
                            onChange={(e)=>setEmail(e.target.value)}/>
                    
                        <textarea
                            type="text" 
                            id="message"
                            rows={10}
                            placeholder='Message'
                            value={message}
                            onChange={(e)=>setMessage(e.target.value)}/>
                        
                        <button type="submit" >Send Message</button>
                </div>
            </form>


        </div>
        
    </div>
  )
}
