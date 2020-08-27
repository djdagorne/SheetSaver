import React, { useState } from 'react';
import Register from '../Register';
import PopupModal from '../../Utils/PopupModal';

export default function Splash() {
  const [popup, setPopup] = useState();

  const register = () => {
    setPopup('register');
  };
  const hideModal = () => {
    document.body.style.position = 'relative';
    document.body.style.overflow = 'scroll';
    setPopup('');
  };
  return (
    <main className="splash-page">
      <section className="hero">
        <h1 className="hero__text--title">SHEETSAVER</h1>
        <h3 className="hero__text--subsubtitle">Dungeons &amp; Dragons 5e Character Sheet</h3>
        <h2 className="hero__text--subtitle">Collaborative Real-Time Editor</h2>
      </section>
      <section className="about">
        <p>Keep track of your characters, not your papers.</p>
        <p>Never let a spill take out your character!</p>
        <p>Ditch the erasers, update your inventory with easy.</p>
      </section>
      <section className="CTA">
        <p>Bring power back to the pen: homebrew friendly, no expansion gated content!</p>
        <p>Share and edit with your DM, or just show off.</p>
        <p>Update in real time, use across multiple devices.</p>
        <button
          type="button"
          className="splash__auth-options--button"
          onClick={register}
        >
          Sign Up Free
        </button>
      </section>
      {popup === 'register' ? (
        <PopupModal hideModal={hideModal}>
          <Register hideModal={hideModal} />
        </PopupModal>
      ) : null}
    </main>
  );
}
