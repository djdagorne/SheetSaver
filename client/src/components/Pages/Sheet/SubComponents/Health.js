import React from 'react';

export default function Health() {
  return (
    <section className="character-component">
      <div className="character-component__heading">
        <h3 className="character-component__title">Characters Health</h3>
      </div>
      <div className="character-component__content--character-health">
        <div className="character-component__temp-hp">temp hp</div>
        <div className="character-component__current-hp">current hp</div>
        <div className="character-component__death-saves">death saves</div>
        <div className="character-component__armor-class">armor class</div>
        <div className="character-component__hit-dice">hit dice</div>
        <div className="character-component__initiative">initiative</div>
        <div className="character-component__speed">speed</div>
      </div>
    </section>
  );
}
