import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home.js';
import Users from './components/Users/Users.js';

export default (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route path='/users' component={ Users } />
  </Switch>
)