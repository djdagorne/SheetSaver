import React from 'react';
import PropTypes from 'prop-types';

export default function Health({ data, updateCharacter }) {
  const handleChangeInput = (event) => {
    const values = { ...data };
    values.health[event.target.name] = event.target.value;
    updateCharacter(values);
  };

  const handleCheckbox = (event) => {
    const values = { ...data };
    switch (event.target.name) {
      case 'success0':
        values.health.saves.success[0] = !data.health.saves.success[0];
        updateCharacter(values);
        break;
      case 'success1':
        values.health.saves.success[1] = !data.health.saves.success[1];
        updateCharacter(values);
        break;
      case 'success2':
        values.health.saves.success[2] = !data.health.saves.success[2];
        updateCharacter(values);
        break;
      case 'fail0':
        values.health.saves.fail[0] = !data.health.saves.fail[0];
        updateCharacter(values);
        break;
      case 'fail1':
        values.health.saves.fail[1] = !data.health.saves.fail[1];
        updateCharacter(values);
        break;
      case 'fail2':
        values.health.saves.fail[2] = !data.health.saves.fail[2];
        updateCharacter(values);
        break;
      default:
        break;
    }
    return 'TODO fix this checkbox code';
  };

  return (
    <div className="character-component">
      <div className="character-component__heading">
        <h3 className="character-component__title">Characters Health</h3>
      </div>
      <div className="character-component__content character-component__content--character-health">
        <div className="character-component__current-hp">
          <label id="current-hp max-hp" htmlFor="current-hp">
            <input
              id="current-hp"
              className="character-component__input character-component__input--current-hp"
              type="number"
              placeholder="29"
              name="currentHP"
              value={data.health.currentHP}
              onChange={(e) => handleChangeInput(e)}
            />
            /
            <input
              id="max-hp"
              className="character-component__input character-component__input--max--hp"
              type="number"
              placeholder="30"
              name="maxHP"
              value={data.health.maxHP}
              onChange={(e) => handleChangeInput(e)}
            />
            <h4>
              current hp
            </h4>
          </label>
        </div>
        <div className="character-component__temp-hp">
          <label id="temp-hp" htmlFor="temp-hp">
            <input
              className="character-component__input character-component__input--temp-hp"
              type="number"
              placeholder="10"
              name="tempHP"
              value={data.health.tempHP}
              onChange={(e) => handleChangeInput(e)}
            />
            <h4>
              temp hp
            </h4>
          </label>
        </div>
        <div className="character-component__death-saves">
          <label id="death-saves" htmlFor="death-saves">
            <div className="character-component__checkbox-group">
              <div className="character-component__checkbox-group--one">
                <input
                  type="checkbox"
                  className="character-component__checkbox"
                  name="success0"
                  checked={data.health.saves.success[0]}
                  onChange={(e) => handleCheckbox(e)}
                />
                <input
                  type="checkbox"
                  className="character-component__checkbox"
                  name="success1"
                  checked={data.health.saves.success[1]}
                  onChange={(e) => handleCheckbox(e)}
                />
                <input
                  type="checkbox"
                  className="character-component__checkbox"
                  name="success2"
                  checked={data.health.saves.success[2]}
                  onChange={(e) => handleCheckbox(e)}
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
                  name="fail0"
                  checked={data.health.saves.fail[0]}
                  onChange={(e) => handleCheckbox(e)}
                />
                <input
                  type="checkbox"
                  className="character-component__checkbox"
                  name="fail1"
                  checked={data.health.saves.fail[1]}
                  onChange={(e) => handleCheckbox(e)}
                />
                <input
                  type="checkbox"
                  className="character-component__checkbox"
                  name="fail2"
                  checked={data.health.saves.fail[2]}
                  onChange={(e) => handleCheckbox(e)}
                />
              </div>
              <p>
                failure
              </p>
            </div>
            <h4>
              death saves
            </h4>
          </label>
        </div>
        <div className="character-component__armor-class">
          <label id="armor-class" htmlFor="armor-class">
            <input
              id="armor-class"
              className="character-component__input character-component__input--current-hp"
              type="number"
              placeholder="13"
              name="armorClass"
              value={data.health.armorClass}
              onChange={(e) => handleChangeInput(e)}
            />
            <h4>
              armor class
            </h4>
          </label>
        </div>
        <div className="character-component__hit-dice">
          <label id="hit-dice" htmlFor="hit-dice">
            <input
              id="hit-dice"
              className="character-component__input character-component__input--current-hp"
              type="text"
              placeholder="1d8"
              name="hitDie"
              value={data.health.hitDie}
              onChange={(e) => handleChangeInput(e)}
            />
            &times;
            <input
              id="remaining-dice"
              className="character-component__input character-component__input--current-hp"
              type="number"
              placeholder="3"
              name="hitDice"
              value={data.health.hitDice}
              onChange={(e) => handleChangeInput(e)}
            />
            <h4>
              hit dice
            </h4>
          </label>
        </div>
        <div className="character-component__initiative">
          <label id="initiative" htmlFor="initiative">
            <input
              id="initiative"
              className="character-component__input character-component__input--current-hp"
              type="number"
              placeholder="+3"
              name="initiative"
              value={data.health.initiative}
              onChange={(e) => handleChangeInput(e)}
            />
            <h4>
              initiative
            </h4>
          </label>
        </div>
        <div className="character-component__speed">
          <label id="speed" htmlFor="speed">
            <div>
              <input
                id="speed"
                className="character-component__input character-component__input--current-hp"
                type="number"
                placeholder="13"
                name="speed"
                value={data.health.speed}
                onChange={(e) => handleChangeInput(e)}
              />
              <p className="character-component__speed--subtext">
                ft./turn
              </p>
            </div>
            <h4>
              speed
            </h4>
          </label>
        </div>
      </div>
    </div>
  );
}

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
        success: PropTypes.arrayOf(PropTypes.boolean),
        fail: PropTypes.arrayOf(PropTypes.boolean),
      }),
      armorClass: PropTypes.number,
      initiative: PropTypes.number,
      speed: PropTypes.number,
    }),
  }),
};

// TODO default props
Health.defaultProps = {
  data: {
    health: {
      currentHP: null,
      maxHP: null,
      tempHP: null,
      hitDie: '',
      hitDice: null,
      saves: {
        success: [false, false, false],
        fail: [false, false, false],
      },
      armorClass: null,
      initiative: null,
      speed: null,
    },
  },
};
