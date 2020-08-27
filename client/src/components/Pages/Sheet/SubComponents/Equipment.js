/* eslint-disable react/prop-types */
import React from 'react';

export default function Equipment({ data, updateCharacter }) {
  const values = { ...data };
  const handleChangeInput = (event) => {
    if (event.target.name === 'equipment') {
      values.equipment = event.target.value;
    }
    values.wallet[event.target.name] = event.target.value;
    updateCharacter(values);
  };
  return (
    <div className="character-component">
      <div className="character-component__heading">
        <h3 className="character-component__title">Equipment & Wallet</h3>
      </div>
      <div className="character-component__content character-component__content--character-equipment">

        <div className="character-component__wallet">
          <div>
            <input
              id="copper"
              className="character-component__input character-component__input--coin"
              type="text"
              name="copper"
              placeholder="0"
              value={data.wallet.copper}
              onChange={(e) => handleChangeInput(e)}
            />
            CP
          </div>
          <div>
            <input
              id="silver"
              className="character-component__input character-component__input--coin"
              type="text"
              name="silver"
              placeholder="0"
              value={data.wallet.silver}
              onChange={(e) => handleChangeInput(e)}
            />
            SP
          </div>
          <div>
            <input
              id="electrum"
              className="character-component__input character-component__input--coin"
              type="text"
              name="electrum"
              placeholder="0"
              value={data.wallet.electrum}
              onChange={(e) => handleChangeInput(e)}
            />
            EP
          </div>
          <div>
            <input
              id="gold"
              className="character-component__input character-component__input--coin"
              type="text"
              name="gold"
              placeholder="0"
              value={data.wallet.gold}
              onChange={(e) => handleChangeInput(e)}
            />
            GP
          </div>
          <div>
            <input
              id="platinum"
              className="character-component__input character-component__input--coin"
              type="text"
              name="platinum"
              placeholder="0"
              value={data.wallet.platinum}
              onChange={(e) => handleChangeInput(e)}
            />
            PP
          </div>
        </div>

        <div className="character-component__item character-component__equipment">
          <label id="equipment" htmlFor="equipment">
            <textarea
              id="equipment"
              className="character-component__input character-component__input--content character-component__equipment-textarea"
              placeholder="backpack, torches, tinderbox, etc..."
              name="equipment"
              value={data.equipment}
              onChange={(e) => handleChangeInput(e)}
            />
          </label>
        </div>
      </div>
    </div>
  );
}
