import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Axios from 'axios';

import Home from './components/Pages/Home/Home';
import Splash from './components/Pages/Splash/Splash';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Pages/Login';
import Register from './components/Pages/Register';
import Sheet from './components/Pages/Sheet/Sheet';
import ProtectedRoute from './components/Utils/ProtectedRoute';
import PublicOnlyRoute from './components/Utils/PublicOnlyRoute';
import NotFound from './components/Pages/NotFound';

import UserContext from './context/UserContext';

import './style.css';

export default function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  // - TODO get database schema for character object
  // - public sheets with real time read access
  // - sheets with only owner + approved username list real time edit access
  // - character list under user home page

  // BONUS comments under characters

  // log in the user if an old token is found in local storage.
  // nest an async function within the useEffect to obtain token info on app render
  /*
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const header = document.getElementById('header');
      if (window.scrollY > 0) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []); */

  useEffect(() => {
    const checkLoggedIn = async () => {
      // check local storage for a token
      let token = localStorage.getItem('auth-token');
      // if no token, create filler blank token
      if (token === null) {
        // eslint-disable-next-line no-console
        console.log('setting blank token!');
        localStorage.setItem('auth-token', '');
        token = '';
      }
      // use token/placeholder to make validation req to server
      const tokenRes = await Axios.post(
        'http://localhost:5000/users/tokenIsValid',
        null,
        { headers: { 'x-auth-token': token } },
      );
      // if tokenRes is true, load up context with our token +
      // the user data(with no password / email)
      if (tokenRes.data) {
        const userRes = await Axios.get('http://localhost:5000/users/', {
          headers: { 'x-auth-token': token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };
    checkLoggedIn();
  }, []);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Header />
        <Switch>
          <PublicOnlyRoute exact path="/" component={Splash} />
          <ProtectedRoute path="/home" component={Home} />
          <PublicOnlyRoute path="/login" component={Login} />
          <PublicOnlyRoute path="/register" component={Register} />
          <PublicOnlyRoute path="/sheet" component={Sheet} />
          <Route path="*" component={NotFound} />
        </Switch>
        {/* <DynamicInput /> */}
        <Footer />
      </UserContext.Provider>
    </BrowserRouter>
  );
}
