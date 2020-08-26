/* eslint-disable react/prop-types */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function AttacksAndSpellcasting({ data, updateCharacter }) {
  const values = { ...data };
  const handleSpellInput = (event) => {
    values.spells[event.target.id.split(' ')[0]][event.target.name] = event.target.value;
    updateCharacter(values);
  };
  const handleAttackInput = (event) => {
    values.attacks[event.target.id.split(' ')[0]][event.target.name] = event.target.value;
    updateCharacter(values);
  };
  const addNewItem = (e, type) => { // TODO get POST end point set up
    const newSpell = {
      id: uuidv4(),
      title: '',
      description: '',
    };
    const newAttack = {
      id: uuidv4(),
      name: '',
      bonus: '',
      damageType: '',
    };
    e.preventDefault();
    if (type === 'attack') {
      values.attacks.push(newAttack);
      updateCharacter(values);
    }
    if (type === 'spell') {
      values.spells.push(newSpell);
      updateCharacter(values);
    }
  };
  return (
    <div className="character-component">
      <div className="character-component__heading">
        <h3 className="character-component__title">Attacks & Spellcasting</h3>
      </div>
      <div className="character-component__content character-component__content--character-prof">
        {data.attacks.map((attack, index) => (
          <div key={`${attack.id}`} className="character-component__item  character-component__titled-text">
            <label id={`${index} attack`} htmlFor={`${index}`}>
              <div className="character-component__input--wrap">
                <input
                  id={`${index} name`}
                  type="text"
                  className="character-component__input character-component__input--attack-name"
                  placeholder="attack"
                  name="name"
                  value={attack.name}
                  onChange={(e) => handleAttackInput(e)}
                />
                {attack.bonus > 0
                  ? '+'
                  : ''}
                <input
                  id={`${index} bonus`}
                  className="character-component__input character-component__input--attack-bonus"
                  placeholder="0"
                  name="bonus"
                  type="number"
                  value={attack.bonus}
                  onChange={(e) => handleAttackInput(e)}
                />
                <textarea
                  id={`${index} damageType`}
                  className="character-component__input character-component__input--attack-damage-type"
                  placeholder="0d0 + 0"
                  name="damageType"
                  rows={1 + (attack.damageType.length / 14)}// TODO play with this value a bit?
                  value={attack.damageType}
                  onChange={(e) => handleAttackInput(e)}
                />
              </div>
            </label>
          </div>
        ))}
        <div className="character-component__button-wrap">
          <button
            className="character-component__button"
            type="submit"
            onClick={(e) => addNewItem(e, 'attack')}
          >
            Add New Attack
          </button>
        </div>
        {data.spells.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index} className="character-component__item character-component__titled-text">
            <label id={`${index} spell`} htmlFor={`${item.title}`}>
              <div className="character-component__input--wrap character-component__input--titled-text">
                <input
                  id={`${index} title`}
                  type="text"
                  className="character-component__input character-component__input--title"
                  placeholder="spell title"
                  name="title"
                  value={item.title}
                  onChange={(e) => handleSpellInput(e)}
                />
                <textarea
                  id={`${index} description`}
                  className="character-component__input character-component__input--content"
                  placeholder="spell description"
                  name="description"
                  rows={1 + (item.description.length / 22)}// TODO play with this value a bit?
                  value={item.description}
                  onChange={(e) => handleSpellInput(e)}
                />
              </div>
            </label>
          </div>
        ))}

        <div className="character-component__button-wrap">
          <button
            className="character-component__button"
            type="submit"
            onClick={(e) => addNewItem(e, 'spell')}
          >
            Add New Spell
          </button>
        </div>
      </div>
    </div>
  );
}
