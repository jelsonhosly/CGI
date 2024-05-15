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

   return (
    <Container>
      <Row className="justify-content-center align-items-center mt-3">
        <Col md={6}>
          <Card>
          <CardBody>
            <CardTitle tag="h5" className="text-center mb-4">Admin Sign Up</CardTitle>
            <CardImg top src={heroImage} alt="Hero Image" className="img-fluid mb-4" />
            <Form>
              <FormGroup>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
              </FormGroup>
              <FormGroup>
                <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
              </FormGroup>
              <FormGroup>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
              </FormGroup>
              <Button color="info" block onClick={handleSignup}>Sign Up</Button>
            </Form>
          </CardBody>
        </Card>
        </Col>
      </Row>
    </Container>
  );
};

