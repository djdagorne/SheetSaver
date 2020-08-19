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
    <div className="login__container">
      <h3 className="login__title">Log In</h3>
      <form className="form user__form" onSubmit={submit}>
        <label id="login__email" htmlFor="login-email">
          Email
          <input
            id="login__email"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="login__password">
          Password
          <input
            id="login-password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input className="login__button" type="submit" value="Log In" />
      </form>
    </div>
  );
}
