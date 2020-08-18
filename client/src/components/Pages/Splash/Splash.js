import React from 'react';
import DynamicInput from '../../Utils/DynamicInput';

export default function Splash() {
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
        <p>sign up now!</p>
      </section>
    </main>
  );
}
