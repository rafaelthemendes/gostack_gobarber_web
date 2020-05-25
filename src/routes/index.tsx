import React from 'react';
import { Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import RouteWithRedirection from './RouteWithRedirection';

const Routes: React.FC = () => (
  <Switch>
    <RouteWithRedirection path="/" exact component={SignIn} />
    <RouteWithRedirection path="/signup" component={SignUp} />
    <RouteWithRedirection path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
