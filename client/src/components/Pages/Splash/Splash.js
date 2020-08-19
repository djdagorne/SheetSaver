import React, { useState } from 'react';
import DynamicInput from '../../Utils/DynamicInput';
import Register from '../Register';
import Login from '../Login';
import PopupModal from '../../Utils/PopupModal';

export default function Splash() {
  const [popup, setPopup] = useState();

  const register = () => {
    // history.push("/register");
    setPopup('register');
  };
  const hideModal = () => {
    document.body.style.position = 'relative';
    document.body.style.overflow = 'scroll';
    setPopup('');
  };
  return (
    <main className="splash-page">
      {/* <DynamicInput /> */}
      <section className="hero">
        <h1 className="hero__text--title">sheet saver</h1>
        <h2 className="hero__text--subtitle">record your character sheets</h2>
      </section>
      <section className="CTA">
        <p>Homebrew friendly, no buying expansions required!</p>
        <p>Bring power back to the pen, and away from the wallet!</p>
        <p>Update in real time, use across multiple devices.</p>
        <button
          type="button"
          className="splash__auth-options--button"
          onClick={register}
        >
          Sign Up Free
        </button>

      </section>
      <>

        {popup === 'register' ? (
          <PopupModal hideModal={hideModal}>
            <Register hideModal={hideModal} />
          </PopupModal>
        ) : null}
      </>
    </main>
  );
}
