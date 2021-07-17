import React, { ComponentType, ReactElement } from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

interface PrivateRouteProps {
  component: ComponentType<any>;
  condition: boolean;
  path: string;
  redirectRoute: string;
}

const PrivateRoute = ({
  component: Component,
  condition,
  path,
  redirectRoute,
  ...props
}: PrivateRouteProps): ReactElement => {
  if (!condition) {
    return <Redirect to={redirectRoute} />;
  }
  return <Route path={path} component={Component} {...props} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  condition: PropTypes.bool,
  path: PropTypes.string,
  redirectRoute: PropTypes.string,
  location: PropTypes.object,
};

export default PrivateRoute;
