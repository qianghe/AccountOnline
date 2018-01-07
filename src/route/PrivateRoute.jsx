import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getLocalItem } from '@lib/storage';
import LayoutContainer from '../container/LayoutContainer';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const hasSession = true || getLocalItem('user');
  const isLoginPage = rest.path.indexOf('login') !== -1;

  return (
    <Route
      {...rest}
      render={props => {
        if (hasSession && !isLoginPage) {
          return <LayoutContainer {...props}><Component {...props} /></LayoutContainer>;
        } else if (hasSession && isLoginPage) {
          return <Redirect to={{ pathname: '/space' }} />;
        } else if (!hasSession && !isLoginPage) {
          return <Redirect to={{ pathname: '/login' }} />;
        }
        return <Component {...props} />;
      }}
    />
  );
};

PrivateRoute.propTypes = {
  location: PropTypes.object,
  component: PropTypes.func,
};
PrivateRoute.defaultProps = {
  location: {},
  component: null,
};

export default PrivateRoute;
