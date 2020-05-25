import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';
import { useAuth } from '../hooks/auth';

interface RouteWithRedirectionProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const RouteWithRedirection: React.FC<RouteWithRedirectionProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const redirectPathName = isPrivate ? '/' : '/dashboard';
  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === isAuthenticated ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: redirectPathName }} />
        );
      }}
    />
  );
};

export default RouteWithRedirection;
