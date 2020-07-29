/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserContext from '../../context/UserContext';

export default function ProtectedRoute({ component: Component, ...rest }) {
  const { userData } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        const { location } = props;
        if (!userData.user) {
          return <Component {...props} />;
        }
        return (
          <Redirect
            to={{
              pathname: '/home',
              state: {
                from: location,
              },
            }}
          />
        );
      }}
    />
  );
}

ProtectedRoute.propTypes = {
  component: PropTypes.element.isRequired,
  location: PropTypes.element.isRequired,
};
