import React from 'react';
//import './App.css'; // assuming you have a CSS file for styling
import  './CSS/LoginPageStyle.css';
import  { useState } from 'react';
import '../components/CSS/LoginStyle.css';
import NavigationBar from './NavigationBar';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
  
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleRememberMeChange = (event) => {
      setRememberMe(event.target.checked);
    };
  
    const handleSignIn = () => {
      // Logic for signing in
      console.log('Username:', username);
      console.log('Password:', password);
      console.log('Remember Me:', rememberMe);
    };


  return (
    <div className="App">
      {/* Your content goes here */}
     <NavigationBar/>
  
     <div className="logging-page">
   
   <h2>Sign In</h2>
   <input
     type="text"
     placeholder="Username"
     value={username}
     onChange={handleUsernameChange}
   />
   <input
     type="password"
     placeholder="Password"
     value={password}
     onChange={handlePasswordChange}
   />
   <label className='Rememberme' >
     <input
       type="checkbox"
       checked={rememberMe}
       onChange={handleRememberMeChange}
     />
     Remember Me
   </label>
   <a href="#" className='forgotpassword' >Forgot Password?</a>
   <button onClick={handleSignIn}>Sign In</button>

    </div>

    </div>
  );
}

export default LoginPage;