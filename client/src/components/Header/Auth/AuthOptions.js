import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import UserContext from '../../../context/UserContext';

export default function AuthOptions() {
  const { userData, setUserData } = useContext(UserContext);

  const history = useHistory();

  const register = () => {
    history.push('/register');
  };
  const logout = () => {
    setUserData({ token: undefined, user: undefined });
    localStorage.setItem('auth-token', '');
    history.push('/');
  };
  const login = () => {
    history.push('/login');
  };
  return (
    <nav className="auth-options">
      {userData.user ? (
        <button type="button" onClick={logout}>Log Out</button>
      ) : (
        <>
          <button type="button" onClick={register}>Register</button>
          <button type="button" onClick={login}>Log In</button>
        </>
      )}
    </nav>
  );
}
