/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';

export default function SavingThrows({ data, updateCharacter }) {
  const handleChangeInput = (event) => {
    const values = { ...data };
    if (event.target.type === 'checkbox') {
      values.saves[event.target.name] = !values.saves[event.target.name];
      updateCharacter(values);
    } else {
      values.saves[event.target.name] = event.target.value;
      updateCharacter(values);
    }
  };

  return (
    <div className="character-component">
      <div className="character-component__heading">
        <h3 className="character-component__title">Saving Throws</h3>
      </div>
      <div className="character-component__content character-component__content--character-saves">
        <div className="character-component__item character-component__strength-save">
          <label id="strengthProf" htmlFor="strengthProf">
            <div className="character-component__input--wrap">
              <input
                type="checkbox"
                className="character-component__checkbox"
                name="strengthProf"
                value={data.saves.strengthProf}
                checked={data.saves.strengthProf}
                onChange={(e) => handleChangeInput(e)}
              />
              {data.saves.strength > 0
                ? '+'
                : ''}
              <input
                className="character-component__input character-component__input--save"
                type="number"
                placeholder="0"
                name="strength"
                value={data.saves.strength}
                onChange={(e) => handleChangeInput(e)}
              />
            </div>
            <h4 className="character-component__label-title">
              strength
            </h4>
          </label>
        </div>

      </div>
    </div>
  );
}
