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

   return (
    <Container>
    <Row className="justify-content-center align-items-center mt-3">
      <Col md={6}>
        <Card className="shadow">
          <CardBody>
            <CardTitle className="text-center mb-4">Welcome to CGI</CardTitle>
            <CardImg top src={heroImage} alt="Hero Image" className="img-fluid mb-4" />
            <Form>
              <FormGroup>
                <Label for="username">Username</Label>
                <Input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username" />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
                <Button className="mt-2" color="primary" block onClick={handleLogin}>Login</Button>
              </FormGroup>
              <FormGroup>
                <Label>Don't have an account?</Label>
                <Button className="md-2" color="info" block onClick={navSignup}>SignUp</Button>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
  );
};
