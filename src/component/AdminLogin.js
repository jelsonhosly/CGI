import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, Row, Col, Form, FormGroup, Label, Input, Card, CardBody, CardImg, CardTitle } from "reactstrap";
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/images/logo.png'; // Replace with the path to your image file

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isadmin, setIsadmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const admin = localStorage.getItem("localadmin") !== null;
    setIsadmin(admin);
  }, []);

  const navSignup = () => {
    navigate(`/Signup`); // Navigate to sign up page
  };
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5050/adminlogin', {
        username,
        password
      });

      if (response.data.token) {
        setIsadmin(true);
        localStorage.setItem("localadmin", response.data.username);
        navigate('/');
      } else {
        console.log('Login failed');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
    
  };
