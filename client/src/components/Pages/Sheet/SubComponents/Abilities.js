/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';

export default function Abilities({ data, updateCharacter }) {
  const handleChangeInput = (event) => {
    const values = { ...data };
    if (event.target.type === 'checkbox') {
      const target = values.abilities[event.target.id][event.target.name];
      values.abilities[event.target.id][event.target.name] = !target;
      updateCharacter(values);
    } else if (event.target.value < 99.1) {
      values.abilities[event.target.id][event.target.name] = Number(event.target.value);
      updateCharacter(values);
    }
  };
  // Passing in undefined values to my controlled inputs gives warnings >:(

  return (
    <div className="character-component">
      <div className="character-component__heading">
        <h3 className="character-component__title">Abilities</h3>
      </div>
      <div className="character-component__content character-component__content--character-abilities">

        {data.abilities.map((ability, index) => (
          <div key={ability.name} className={`character-component__item character-component__${ability.name}`}>
            <label id={`${ability.name}Prof`} htmlFor={`${ability.name}Prof`}>
              <div className="character-component__input--wrap">
                {ability.modifier > 0
                  ? <div className="character-component--plus">+</div>
                  : ''}
                <input
                  id={index}
                  className="character-component__input character-component__input--mod"
                  type="number"
                  placeholder="0"
                  name="modifier"
                  value={ability.modifier}
                  onChange={(e) => handleChangeInput(e)}
                  contentEditable
                />
                <input
                  id={index}
                  className="character-component__input character-component__input--score"
                  type="number"
                  placeholder="0"
                  name="score"
                  value={ability.score}
                  onChange={(e) => handleChangeInput(e)}
                />
              </div>
              <h4 className="character-component__label-title">
                {ability.name}
              </h4>
            </label>
          </div>
        ))}

        {/*
        <div className="character-component__item character-component__strength">
          <label id="strength" htmlFor="strMod">
            <div className="character-component__input--wrap">
              {data.abilities.modifier > 0
                ? <div className="character-component--plus">+</div>
                : ''}
              <input
                className="character-component__input character-component__input--mod"
                type="number"
                placeholder="0"
                name="modifier"
                value={data.abilities.modifier}
                onChange={(e) => handleChangeInput(e)}
                contentEditable
              />
              <input
                className="character-component__input character-component__input--score"
                type="number"
                placeholder="0"
                name="score"
                value={data.abilities.score}
                max="99"
                onChange={(e) => handleChangeInput(e)}
              />
            </div>
            <h4 className="character-component__label-title">
              strength
            </h4>
          </label>
        </div> */}

      </div>
    </div>
  );
}
