import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

import UserContext from '../../context/UserContext';
import ErrorNotice from '../Utils/ErrorNotice';

export default function Register(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [username, setUsername] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const { hideModal } = props;

  const submit = async (e) => {
    e.preventDefault();
    try {
      const newUser = {
        username, email, password, passwordCheck,
      };
      await Axios.post('http://localhost:5000/users/register', newUser);
      const loginRes = await Axios.post('http://localhost:5000/users/login', {
        email,
        password,
      });
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem('auth-token', loginRes.data.token);
      hideModal();
      history.push('/home');
    } catch (err) {
      if (err.response.data.message) {
        setError(err.response.data.message);
      } else {
        // eslint-disable-next-line no-console
        console.warn(err);
      }
    }
  };
  /* TODO LOOK INTO REACT FORM HOOKS PACKAGE/NPM */
  return (
    <>
      <h2>Registration</h2>
      {error && (
        <ErrorNotice
          message={error}
          clearError={() => {
            setError(undefined);
          }}
        />
      )}
      <form className="form" onSubmit={submit}>
        <label htmlFor="register-username">
          Username
          <input
            id="register-username"
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label htmlFor="register-email">
          Email
          <input
            id="register-email"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="register-password">
          Password
          <input
            id="register-password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            id="verify-password"
            type="password"
            placeholder="Verify password"
            onChange={(e) => setPasswordCheck(e.target.value)}
          />
        </label>
        <input type="submit" value="Register" />
      </form>
    </>
  );
}

Register.propTypes = {
  hideModal: PropTypes.func.isRequired,
};