import React, { useState } from 'react';
import { CardImg, Row,Col, Button, Card, CardBody, CardTitle, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import axios from 'axios';
import heroImage from '../assets/images/logo.png'; 

const SignupForm = ({ onSignupSuccess, nextChildID }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [childID, setChildID] = useState(nextChildID);

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:5050/signup', {
        email,
        username,
        password,
        childID: nextChildID 
      });

      if (response.data.message === 'User created successfully') {
        onSignupSuccess(); 
      } else {
        // Handle signup failure
      }
    } catch (error) {
      console.error('Signup failed:', error);
      // Handle signup failure
    }
  };
