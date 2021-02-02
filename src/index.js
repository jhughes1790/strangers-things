// on reactDom for this

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import Posts from './components/Posts';

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
      </nav>
      <main>
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Posts">
            <Posts />
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

