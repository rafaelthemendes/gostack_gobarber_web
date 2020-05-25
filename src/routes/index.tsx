import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import RouteWithRedirection from './RouteWithRedirection';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <RouteWithRedirection path="/" exact component={SignIn} />
    <RouteWithRedirection path="/signup" component={SignUp} />
    <RouteWithRedirection path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
