import React, { useState } from 'react';
import {  CardImg, Row,Col, Card, CardBody, CardTitle, Form, FormGroup, Input, Button,Container } from "reactstrap";
import axios from 'axios';
import heroImage from '../assets/images/logo.png'; 
const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:5050/adminsignup', {
        email,
        username,
        password
      });

      if (response.data.message === 'Admin created successfully') {
        // Handle successful signup
      } else {
        // Handle signup failure
      }
    } catch (error) {
      console.error('Signup failed:', error);
      // Handle signup failure
    }
  };
