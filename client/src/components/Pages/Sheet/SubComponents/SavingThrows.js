/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';

export default function SavingThrows({ data, updateCharacter }) {
  const handleChangeInput = (event) => {
    const values = { ...data };
    if (event.target.type === 'checkbox') {
      const target = values.saves[event.target.id][event.target.name];
      values.saves[event.target.id][event.target.name] = !target;
      updateCharacter(values);
    } else if (event.target.value < 99.1) {
      values.saves[event.target.id][event.target.name] = Number(event.target.value);
      updateCharacter(values);
    }
  };

  return (
    <div className="character-component">
      <div className="character-component__heading">
        <h3 className="character-component__title">Saving Throws</h3>
      </div>
      <div className="character-component__content character-component__content--character-saves">

        {data.saves.map((save, index) => (
          <div key={save.name} className={`character-component__item character-component__${save.name}-save`}>
            <label id={`${save.name}Prof`} htmlFor={`${save.name}Prof`}>
              <div className="character-component__input--wrap">
                <input
                  id={index}
                  type="checkbox"
                  className="character-component__checkbox"
                  name="prof"
                  checked={save.prof}
                  onChange={(e) => handleChangeInput(e)}
                />
                {save.modifier > 0
                  ? <div className="character-component--plus">+</div>
                  : ''}
                <input
                  id={index}
                  className="character-component__input character-component__input--save"
                  type="number"
                  placeholder="0"
                  name="modifier"
                  value={save.modifier}
                  onChange={(e) => handleChangeInput(e)}
                />
              </div>
              <h4 className="character-component__label-title">
                {save.name}
              </h4>
            </label>
          </div>
        ))}

      </div>
    </div>
  );
}
