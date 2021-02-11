import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../public/css/styles.css';
import { Redirect } from 'react-router-dom';
import logo from '../public/images/logo.png';
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
        if (data.isVerified) {
          // if authentication succeeds, set user donation status in global state
          donatorStatusHandler(data.donatorStatus);
          // if authenticaiton succeeds, redirect to home
          setRedirect(true);
        }
      });
  };
  // const invokeSignup = () => { // TODO
  //   return
  // }
  if (redirect) return <Redirect to="/home" />;
  return (
    <div id="landing">
      <img id="logo" alt="logo" src={logo} />
      <Form id="form">
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
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div id="landingButton">
          <Button
            variant="primary"
            type="button"
            // onClick={() => invokeSignup()} // ! this is not fully implemented
          >
            Signup
          </Button>
          <Button
            variant="primary"
            type="button"
            onClick={() => invokeLogin()}
          >
            Login
          </Button>

        </div>
      </Form>
    </div>
  );
};
export default Landing;
