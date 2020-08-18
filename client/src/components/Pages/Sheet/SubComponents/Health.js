import React from 'react';

export default function Health() {
  return (
    <section className="character-component">
      <div className="character-component__heading">
        <h3>CHARACTER HEALTH</h3>
      </div>
      <div className="character-component__content--character-health">
        <div className="character-component__temp-hp">temp hp</div>
        <div className="character-component__current-hp">current hp</div>
        <div className="character-component__death-saves">death saves</div>
        <div className="character-component__hit-dice">hit dice</div>
      </div>
    </section>
  );
}
