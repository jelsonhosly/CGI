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
return (
    <Container>
      <Row className="justify-content-center align-items-center mt-3">
        <Col md={6}>
          <Card className="shadow">
            <CardBody>
              <CardTitle className="text-center mb-4">Welcome to CGI Admin</CardTitle>
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
