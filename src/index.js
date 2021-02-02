// on reactDom for this

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import Posts from './components/Posts';
import Login from './components/Login';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

const App = () => {
  return (
    <div id='App'>
      <Router>
      <nav>
        <Link to="/Home">Home</Link>
        <Link to="/Posts">Posts</Link>
        <Link to="/Login">Login</Link>
      </nav>
      <main>
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Posts">
            <Posts />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
        </Switch>
      </main>
      </Router>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('App')
);

