/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';

export default function Skills({ data, updateCharacter }) {
  const handleChangeInput = (event) => {
    const values = { ...data };
    if (event.target.type === 'checkbox') {
      const target = values.skills[event.target.id][event.target.name];
      values.skills[event.target.id][event.target.name] = !target;
      updateCharacter(values);
    } else if (event.target.value < 99.1) {
      values.skills[event.target.id][event.target.name] = Number(event.target.value);
      updateCharacter(values);
    }
  };

  return (
    <div className="character-component">
      <div className="character-component__heading">
        <h3 className="character-component__title">Skill Checks</h3>
      </div>
      <div className="character-component__content character-component__content--character-skills">

        {data.skills.map((skill, index) => (
          <div key={skill.name} className={`character-component__item character-component__${skill.name.replace(/\s/g, '')}-check`}>
            <label id={`${skill.name.replace(/\s/g, '')}Prof`} htmlFor={`${skill.name.replace(/\s/g, '')}Prof`}>
              <div className="character-component__input--wrap">
                <input
                  id={index}
                  type="checkbox"
                  className="character-component__checkbox"
                  name="prof"
                  checked={skill.prof}
                  onChange={(e) => handleChangeInput(e)}
                />
                {skill.modifier > 0
                  ? <div className="character-component--plus">+</div>
                  : ''}
                <input
                  id={index}
                  className="character-component__input character-component__input--check"
                  type="number"
                  placeholder="0"
                  name="modifier"
                  value={skill.modifier}
                  onChange={(e) => handleChangeInput(e)}
                />
              </div>
              <h4 className="character-component__label-title">
                {skill.name}
              </h4>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
