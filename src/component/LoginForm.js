import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, Row, Col, Form, FormGroup, Label, Input, Card, CardBody, CardImg, CardTitle } from "reactstrap";
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/images/logo.png'; 
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setuser] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    const childId = (localStorage.getItem("localChildId") !== null);
    const user = (localStorage.getItem("localuser") !== null);
    console.log(localStorage.getItem("localChildId"));
    console.log(localStorage.getItem("localuser"));
    setIsLoggedIn(childId)
    setuser(user)
    // isLoggedIn && navigate('/')
  }, [])
  
  
  const navSignup = () => {
    navigate(`/Signup`); // Navigate to sign up page
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5050/login', {
        username,
        password
      });

      if (response.data.token) {
        setIsLoggedIn(true)
        localStorage.setItem("localChildId", response.data.childId)
        localStorage.setItem("localuser", response.data.username)
        navigate('/')
      } else {
        console.log('Login failed');
      }

    } catch (error) {
      console.error('Login failed:', error);
    }
  };
