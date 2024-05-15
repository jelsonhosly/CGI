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
return (
    <Container>
      <Row className="justify-content-center align-items-center mt-3">
        <Col md={6}>
            <Card>
            <CardBody>
              <CardTitle tag="h5" className="text-center mb-4">Sign Up</CardTitle>
              <CardImg top src={heroImage} alt="Hero Image" className="img-fluid mb-4" />
              <Form>
                <FormGroup>
                  <Input type="text" value={nextChildID} disabled placeholder="ChildID" />
                </FormGroup>
                <FormGroup>
                  <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
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
