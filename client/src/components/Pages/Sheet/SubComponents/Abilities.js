/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';

export default function Abilities({ data, updateCharacter }) {
  const handleChangeInput = (event) => {
    const values = { ...data };
    values.abilities[event.target.name] = event.target.value;
    updateCharacter(values);
  };
  // Passing in undefined values to my controlled inputs gives warnings >:(

  return (
    <div className="character-component">
      <div className="character-component__heading">
        <h3 className="character-component__title">Abilities</h3>
      </div>
      <div className="character-component__content character-component__content--character-abilities">
        <div className="character-component__item character-component__strength">
          <label id="strength" htmlFor="strMod">
            <div className="character-component__input--wrap">
              {data.abilities.strMod > 0
                ? '+'
                : ''}
              <input
                className="character-component__input character-component__input--mod"
                type="number"
                placeholder="0"
                name="strMod"
                value={data.abilities.strMod}
                onChange={(e) => handleChangeInput(e)}
                contentEditable
              />
              <input
                className="character-component__input character-component__input--score"
                type="number"
                placeholder="0"
                name="strScore"
                value={data.abilities.strScore}
                max="99"
                onChange={(e) => handleChangeInput(e)}
              />
            </div>
            <h4 className="character-component__label-title">
              strength
            </h4>
          </label>
        </div>
        <div className="character-component__item character-component__dexterity">
          <label id="dexterity" htmlFor="dexMod">
            <div className="character-component__input--wrap">
              {data.abilities.dexMod > 0
                ? '+'
                : null}
              <input
                className="character-component__input character-component__input--mod"
                type="number"
                placeholder="0"
                name="dexMod"
                value={data.abilities.dexMod}
                onChange={(e) => handleChangeInput(e)}
              />
              <input
                className="character-component__input character-component__input--score"
                type="number"
                placeholder="0"
                name="dexScore"
                value={data.abilities.dexScore}
                onChange={(e) => handleChangeInput(e)}
              />
            </div>
            <h4 className="character-component__label-title">
              dexterity
            </h4>
          </label>
        </div>
        <div className="character-component__item character-component__constitution">
          <label id="constitution" htmlFor="conMod">
            <div className="character-component__input--wrap">
              {data.abilities.conMod > 0
                ? '+'
                : null}
              <input
                className="character-component__input character-component__input--mod"
                type="number"
                placeholder="0"
                name="conMod"
                value={data.abilities.conMod}
                onChange={(e) => handleChangeInput(e)}
              />
              <input
                className="character-component__input character-component__input--score"
                type="number"
                placeholder="0"
                name="conScore"
                value={data.abilities.conScore}
                onChange={(e) => handleChangeInput(e)}
              />
            </div>
            <h4 className="character-component__label-title">
              constitution
            </h4>
          </label>
        </div>
        <div className="character-component__item character-component__intelligence">
          <label id="intelligence" htmlFor="intMod">
            <div className="character-component__input--wrap">
              {data.abilities.intMod > 0
                ? '+'
                : null}
              <input
                className="character-component__input character-component__input--mod"
                type="number"
                placeholder="0"
                name="intMod"
                value={data.abilities.intMod}
                onChange={(e) => handleChangeInput(e)}
              />
              <input
                className="character-component__input character-component__input--score"
                type="number"
                placeholder="0"
                name="intScore"
                value={data.abilities.intScore}
                onChange={(e) => handleChangeInput(e)}
              />
            </div>
            <h4 className="character-component__label-title">
              intelligence
            </h4>
          </label>
        </div>
        <div className="character-component__item character-component__wisdom">
          <label id="wisdom" htmlFor="wisMod">
            <div className="character-component__input--wrap">
              {data.abilities.wisMod > 0
                ? '+'
                : null}
              <input
                className="character-component__input character-component__input--mod"
                type="number"
                placeholder="0"
                name="wisMod"
                value={data.abilities.wisMod}
                onChange={(e) => handleChangeInput(e)}
              />
              <input
                className="character-component__input character-component__input--score"
                type="number"
                placeholder="0"
                name="wisScore"
                value={data.abilities.wisScore}
                onChange={(e) => handleChangeInput(e)}
              />
            </div>
            <h4 className="character-component__label-title">
              wisdom
            </h4>
          </label>
        </div>
        <div className="character-component__item character-component__charisma">
          <label id="charisma" htmlFor="chaMod">
            <div className="character-component__input--wrap">
              {data.abilities.chaMod > 0
                ? '+'
                : null}
              <input
                className="character-component__input character-component__input--mod"
                type="number"
                placeholder="0"
                name="chaMod"
                value={data.abilities.chaMod}
                onChange={(e) => handleChangeInput(e)}
              />
              <input
                className="character-component__input character-component__input--score"
                type="number"
                placeholder="0"
                name="chaScore"
                value={data.abilities.chaScore}
                onChange={(e) => handleChangeInput(e)}
              />
            </div>
            <h4 className="character-component__label-title">
              charisma
            </h4>
          </label>
        </div>
      </div>
    </div>
  );
}
