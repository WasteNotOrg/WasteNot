import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FeedContext } from '../providers/FeedProvider';
const Landing = () => {
  // GLOBAL STATE
  const { setIsDonating } = useContext(FeedContext);

  // LOCAL STATE
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [isVerified, setIsVerified] = useState(true) // ! conditionally render error on ui?
  
  // LOGIN 
  const invokeLogin = (e) => {
    //e.preventDefault();
    const optionsObj = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email,
        password
      })
    }

    fetch('/landing', optionsObj)
      .then((res) => res.json())
      .then((data) => { 
        if (!data.isVerified) setIsVerified(false);
      })
  }  
  // const invokeSignup= () => { // TODO
  //   return
  // }  
 return (
  <Form>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control 
        type="email" 
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
       <Form.Control
         type="password"
         placeholder="Password"
         value={password}
         onChange={(e) => setPassword(e.target.value)} />
    </Form.Group>
    <Button 
      variant="primary" 
      type="button"
      onClick={(e) => invokeLogin()} // ! this might be wrong
    >
      Login
    </Button>
    <Button 
      variant="primary" 
      type="button"
      onClick={(e) => invokeSignup()} // ! this is not fully implemented
    >
      Signup
    </Button>
  </Form>
  );
};
export default Landing;
