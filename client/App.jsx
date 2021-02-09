import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Landing from './components/Landing.jsx';
import Home from './components/Home.jsx';
import RegisterForm from './components/RegisterForm.jsx';

const App = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Route path="/registerform">
          <RegisterForm />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;