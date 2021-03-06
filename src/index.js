// on reactDom for this

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
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


  function isLoggedIn() { 
    if(localStorage.getItem('token')) {
      return true;
    }else {
      return false;
    }
  }


  //helper function return true or false (localstorage.getItem if get something true if not false)

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
         <Route exact path="/">
            {isLoggedIn() ? <Redirect to="/Posts" /> : <Login />}
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

