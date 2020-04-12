import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Public = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Component {...props} />
    )}

  />
);

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props => (
      !loggedIn ? (<Component {...props} />) : (<Redirect to="/tickets" />)
    )}

  />
);

const Protected = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      loggedIn ? (<Component {...props} />) : (<Redirect to="/login" />)
    )}

  />
);

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated
});

export const PublicRoute = withRouter(connect(mapStateToProps)(Public));
export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const PrivateRoute = withRouter(connect(mapStateToProps)(Protected));
