// on reactDom for this

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import Posts from './components/Posts';
import Login from './components/Login';
import Search from './components/Search';
import Register from './components/Register';

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
        <Link to="/Search">Search</Link>
        <Link to="/Register">Register</Link>
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
          <Route path="/Search">
            <Search />
          </Route>
          <Route path="/Register">
            <Register />
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

