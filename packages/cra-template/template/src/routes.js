import React from 'react';
import { Switch, Route, IndexRoute } from 'react-router-dom';

/**
 * Import all page components here
 */
import App from './App';
import Post from './Post';
// import MainPage from './components/MainPage';
// import SomePage from './components/SomePage';
// import SomeOtherPage from './components/SomeOtherPage';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Switch>
    <Route exact path="/:userId" component={App}></Route>
    <Route exact path="/post/:id/:userId" component={Post}></Route>
  </Switch>
);
