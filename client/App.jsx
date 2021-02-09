import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Landing from './components/Landing.jsx';
import Home from './components/Home.jsx';

const App = () => (
  <div style={{ backgroundColor: 'white' }}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>

        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;