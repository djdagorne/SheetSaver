import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import UserContext from '../../context/UserContext';

import PopupModal from '../Utils/PopupModal';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

export default function Header() {
  const { userData, setUserData } = useContext(UserContext);
  const [popup, setPopup] = useState();

  const history = useHistory();

  const logout = () => {
    setUserData({ token: undefined, user: undefined });
    localStorage.setItem('auth-token', '');
    history.push('/');
  };
  const login = () => {
    // history.push("/login");
    setPopup('login');
  };
  const hideModal = () => {
    document.body.style.position = 'relative';
    document.body.style.overflow = 'scroll';
    setPopup('');
  };
  return (
    <header id="header">
      <div className="header__container">
        <Link to="/" className="header__title">
          <span className="header__title--name">SheetSaver</span>
        </Link>
        <nav className="header__auth-options">
          {userData.user ? (
            <button type="button" className="header__auth-options--button" onClick={logout}>Log Out</button>
          ) : (
            <>
              <button type="button" className="header__auth-options--button" onClick={login}>Log In</button>
            </>

          )}
        </nav>
      </div>
      {popup === 'login' ? (
        <PopupModal hideModal={hideModal}>
          <Login hideModal={hideModal} />
        </PopupModal>
      ) : null}
    </header>
  );
}
