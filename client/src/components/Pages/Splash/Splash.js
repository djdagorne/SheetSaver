import React from 'react';
import DynamicInput from '../../Utils/DynamicInput';

export default function Splash() {
  return (
    <main>
      <DynamicInput />
      <section className="intro hero">
        <h1>sheet saver</h1>
      </section>
      <section className="what">
        <h2>record your character sheets</h2>
      </section>
      <section className="why">
        <p>Homebrew friendly, no buying expansions required!</p>
        <p>Bring power back to the pen, and away from the wallet!</p>
      </section>
      <section className="whenAndWhere">
        <p>Update in real time, use across multiple devices.</p>
      </section>
    </main>
  );
}
