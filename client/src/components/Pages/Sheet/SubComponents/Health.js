/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';

export default function Health({ data, updateCharacter }) {
  // TODO deconstruct data into seperate objects?
  const handleChangeInput = (event) => {
    const values = { ...data };
    if (event.target.type === 'checkbox') {
      values.health[event.target.name] = !values.health[event.target.name];
      updateCharacter(values);
    } else {
      values.health[event.target.name] = event.target.value;
      updateCharacter(values);
    }
  };

  return (
    <div className="character-component">
      <div className="character-component__heading">
        <h3 className="character-component__title">Health & Stats</h3>
      </div>
      <div className="character-component__content character-component__content--character-health">
        <div className="character-component__item character-component__temp-hp">
          <label id="temp-hp" htmlFor="temp-hp">
            <input
              className="character-component__input "
              type="number"
              placeholder="0"
              name="tempHP"
              value={data.health.tempHP}
              onChange={(e) => handleChangeInput(e)}
            />
            <h4 className="character-component__label-title">
              temp hp
            </h4>
          </label>
        </div>
        <div className="character-component__item character-component__current-hp">
          <label id="current-hp max-hp" htmlFor="current-hp">
            <input
              id="current-hp"
              className="character-component__input "
              type="number"
              placeholder="0"
              name="currentHP"
              value={data.health.currentHP}
              onChange={(e) => handleChangeInput(e)}
            />
            /
            <input
              id="max-hp"
              className="character-component__input character-component__input--max--hp"
              type="number"
              placeholder="0"
              name="maxHP"
              value={data.health.maxHP}
              onChange={(e) => handleChangeInput(e)}
            />
            <h4 className="character-component__label-title">
              current hp
            </h4>
          </label>
        </div>
        <div className="character-component__item character-component__hit-dice">
          <label id="hit-dice" htmlFor="hit-dice">
            <input
              id="hit-dice"
              className="character-component__input "
              type="text"
              placeholder="0d0"
              name="hitDie"
              value={data.health.hitDie}
              onChange={(e) => handleChangeInput(e)}
            />
            &times;
            <input
              id="remaining-dice"
              className="character-component__input "
              type="number"
              placeholder="0"
              name="hitDice"
              value={data.health.hitDice}
              onChange={(e) => handleChangeInput(e)}
            />
            <h4 className="character-component__label-title">
              hit dice
            </h4>
          </label>
        </div>
        <div className="character-component__item character-component__death-saves">
          <label id="death-saves" htmlFor="death-saves">
            <div className="character-component__checkbox-group">
              <div className="character-component__checkbox-group--one">
                <input
                  type="checkbox"
                  className="character-component__checkbox"
                  name="saveOne"
                  value={data.health.saveOne}
                  checked={data.health.saveOne}
                  onChange={(e) => handleChangeInput(e)}
                />
                <input
                  type="checkbox"
                  className="character-component__checkbox"
                  name="saveTwo"
                  value={data.health.saveTwo}
                  checked={data.health.saveTwo}
                  onChange={(e) => handleChangeInput(e)}
                />
                <input
                  type="checkbox"
                  className="character-component__checkbox"
                  name="saveThree"
                  value={data.health.saveThree}
                  checked={data.health.saveThree}
                  onChange={(e) => handleChangeInput(e)}
                />
              </div>
              <p>
                success
              </p>
            </div>
            <div className="character-component__checkbox-group">
              <div className="character-component__checkbox-group--two">
                <input
                  type="checkbox"
                  className="character-component__checkbox"
                  name="failOne"
                  value={data.health.failOne}
                  checked={data.health.failOne}
                  onChange={(e) => handleChangeInput(e)}
                />
                <input
                  type="checkbox"
                  className="character-component__checkbox"
                  name="failTwo"
                  value={data.health.failTwo}
                  checked={data.health.failTwo}
                  onChange={(e) => handleChangeInput(e)}
                />
                <input
                  type="checkbox"
                  className="character-component__checkbox"
                  name="failThree"
                  value={data.health.failThree}
                  checked={data.health.failThree}
                  onChange={(e) => handleChangeInput(e)}
                />
              </div>
              <p>
                failure
              </p>
            </div>
            <h4 className="character-component__label-title">
              death saves
            </h4>
          </label>
        </div>
        <div className="character-component__item character-component__armor-class">
          <label id="armor-class" htmlFor="armor-class">
            <input
              id="armor-class"
              className="character-component__input "
              type="number"
              placeholder="0"
              name="armorClass"
              value={data.health.armorClass}
              onChange={(e) => handleChangeInput(e)}
            />
            <h4 className="character-component__label-title">
              armor class
            </h4>
          </label>
        </div>
        <div className="character-component__item character-component__initiative">
          <label id="initiative" htmlFor="initiative">
            <input
              id="initiative"
              className="character-component__input "
              type="number"
              placeholder="0"
              name="initiative"
              value={data.health.initiative}
              onChange={(e) => handleChangeInput(e)}
            />
            <h4 className="character-component__label-title">
              initiative
            </h4>
          </label>
        </div>
        <div className="character-component__item character-component__speed">
          <label id="speed" htmlFor="speed">
            <div>
              <input
                id="speed"
                className="character-component__input "
                type="number"
                placeholder="0"
                name="speed"
                value={data.health.speed}
                onChange={(e) => handleChangeInput(e)}
              />
              <p className="character-component__speed--subtext">
                ft./turn
              </p>
            </div>
            <h4 className="character-component__label-title">
              speed
            </h4>
          </label>
        </div>
      </div>
    </div>
  );
}
/*
Health.propTypes = {
  updateCharacter: PropTypes.func.isRequired,
  data: PropTypes.shape({
    health: PropTypes.shape({
      currentHP: PropTypes.number,
      maxHP: PropTypes.number,
      tempHP: PropTypes.number,
      hitDie: PropTypes.string,
      hitDice: PropTypes.number,
      saves: PropTypes.shape({
        success: PropTypes.arrayOf(PropTypes.bool),
        fail: PropTypes.arrayOf(PropTypes.bool),
      }),
      armorClass: PropTypes.number,
      initiative: PropTypes.number,
      speed: PropTypes.number,
    }),
  }),
};

 */
