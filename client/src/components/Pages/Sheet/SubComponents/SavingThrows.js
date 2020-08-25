/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';

export default function SavingThrows({ data, updateCharacter }) {
  const handleChangeInput = (event) => {
    console.log(event.target.id);
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

        {/* <div className="character-component__item character-component__strength-save">
          <label id="strengthProf" htmlFor="strengthProf">
            <div className="character-component__input--wrap">
              <input
                type="checkbox"
                className="character-component__checkbox"
                name="strengthProf"
                // value={data.saves.strengthProf}
                checked={data.saves.strengthProf}
                onChange={(e) => handleChangeInput(e)}
              />
              {data.saves.strength > 0
                ? <div className="character-component--plus">+</div>
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

        <div className="character-component__item character-component__dexterity-save">
          <label id="dexterityProf" htmlFor="dexterityProf">
            <div className="character-component__input--wrap">
              <input
                type="checkbox"
                className="character-component__checkbox"
                name="dexterityProf"
                // value={data.saves.dexterityProf}
                checked={data.saves.dexterityProf}
                onChange={(e) => handleChangeInput(e)}
              />
              {data.saves.dexterity > 0
                ? <div className="character-component--plus">+</div>
                : ''}
              <input
                className="character-component__input character-component__input--save"
                type="number"
                placeholder="0"
                name="dexterity"
                value={data.saves.dexterity}
                onChange={(e) => handleChangeInput(e)}
              />
            </div>
            <h4 className="character-component__label-title">
              dexterity
            </h4>
          </label>
        </div>

        <div className="character-component__item character-component__constitution-save">
          <label id="constitutionProf" htmlFor="constitutionProf">
            <div className="character-component__input--wrap">
              <input
                type="checkbox"
                className="character-component__checkbox"
                name="constitutionProf"
                // value={data.saves.constitutionProf}
                checked={data.saves.constitutionProf}
                onChange={(e) => handleChangeInput(e)}
              />
              {data.saves.constitution > 0
                ? <div className="character-component--plus">+</div>
                : ''}
              <input
                className="character-component__input character-component__input--save"
                type="number"
                placeholder="0"
                name="constitution"
                value={data.saves.constitution}
                onChange={(e) => handleChangeInput(e)}
              />
            </div>
            <h4 className="character-component__label-title">
              constitution
            </h4>
          </label>
        </div>

        <div className="character-component__item character-component__intelligence-save">
          <label id="intelligenceProf" htmlFor="intelligenceProf">
            <div className="character-component__input--wrap">
              <input
                type="checkbox"
                className="character-component__checkbox"
                name="intelligenceProf"
                // value={data.saves.intelligenceProf}
                checked={data.saves.intelligenceProf}
                onChange={(e) => handleChangeInput(e)}
              />
              {data.saves.intelligence > 0
                ? <div className="character-component--plus">+</div>
                : ''}
              <input
                className="character-component__input character-component__input--save"
                type="number"
                placeholder="0"
                name="intelligence"
                value={data.saves.intelligence}
                onChange={(e) => handleChangeInput(e)}
              />
            </div>
            <h4 className="character-component__label-title">
              intelligence
            </h4>
          </label>
        </div>

        <div className="character-component__item character-component__wisdom-save">
          <label id="wisdomProf" htmlFor="wisdomProf">
            <div className="character-component__input--wrap">
              <input
                type="checkbox"
                className="character-component__checkbox"
                name="wisdomProf"
                // value={data.saves.wisdomProf}
                checked={data.saves.wisdomProf}
                onChange={(e) => handleChangeInput(e)}
              />
              {data.saves.wisdom > 0
                ? <div className="character-component--plus">+</div>
                : ''}
              <input
                className="character-component__input character-component__input--save"
                type="number"
                placeholder="0"
                name="wisdom"
                value={data.saves.wisdom}
                onChange={(e) => handleChangeInput(e)}
              />
            </div>
            <h4 className="character-component__label-title">
              wisdom
            </h4>
          </label>
        </div>

        <div className="character-component__item character-component__charisma-save">
          <label id="charismaProf" htmlFor="charismaProf">
            <div className="character-component__input--wrap">
              <input
                type="checkbox"
                className="character-component__checkbox"
                name="charismaProf"
                // value={data.saves.charismaProf}
                checked={data.saves.charismaProf}
                onChange={(e) => handleChangeInput(e)}
              />
              {data.saves.charisma > 0
                ? <div className="character-component--plus">+</div>
                : ''}
              <input
                className="character-component__input character-component__input--save"
                type="number"
                placeholder="0"
                name="charisma"
                value={data.saves.charisma}
                onChange={(e) => handleChangeInput(e)}
              />
            </div>
            <h4 className="character-component__label-title">
              charisma
            </h4>
          </label>
        </div>
 */}
      </div>
    </div>
  );
}
