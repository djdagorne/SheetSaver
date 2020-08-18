import React, { useState, useContext } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

import UserContext from '../../context/UserContext';

export default function Login(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    const loginUser = { email, password };
    const loginRes = await Axios.post(
      'http://localhost:5000/users/login',
      loginUser,
    );
    setUserData({
      token: loginRes.data.token,
      user: loginRes.data.user,
    });
    localStorage.setItem('auth-token', loginRes.data.token);
    // eslint-disable-next-line react/prop-types
    props.hideModal();
    history.push('/home');
  };

  return (
    <>
      <h2 className="modal-title">Log In</h2>
      <form className="form" onSubmit={submit}>
        <label id="login-email" htmlFor="login-email">
          Email
          <input
            id="login-email"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="login-password">
          Password
          <input
            id="login-password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input type="submit" value="Log In" />
      </form>
    </>
  );
}
