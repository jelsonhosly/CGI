import React, { useState } from 'react';
import { CardImg, Row,Col, Button, Card, CardBody, CardTitle, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import axios from 'axios';
import heroImage from '../assets/images/logo.png'; 

const SignupForm = ({ onSignupSuccess, nextChildID }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [childID, setChildID] = useState(nextChildID);
