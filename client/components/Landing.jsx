import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { FeedContext } from '../providers/FeedProvider.jsx';

const Landing = () => {
  // GLOBAL STATE
  const { donatorStatusHandler } = useContext(FeedContext);

  // LOCAL STATE
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  // LOGIN
  const invokeLogin = () => {
    const optionsObj = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
      }),
    };

    fetch('/landing', optionsObj)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.isVerified) {
          donatorStatusHandler(data.donatorStatus);
          setRedirect(true);
        }
      });
  };
  // const invokeSignup = () => { // TODO
  //   return
  // }
  if (redirect) return <Redirect to="/home" />;
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
        onClick={() => invokeLogin()} // ! this might be wrong
      >
        Login
      </Button>
      <Button
        variant="primary"
        type="button"
        onClick={() => invokeSignup()} // ! this is not fully implemented
      >
        Signup
      </Button>
    </Form>
  );
};
export default Landing;
