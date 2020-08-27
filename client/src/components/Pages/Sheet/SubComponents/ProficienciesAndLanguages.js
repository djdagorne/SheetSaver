/* eslint-disable react/prop-types */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function ProficienciesAndLanguages({ data, updateCharacter }) {
  const values = { ...data };
  const handleChangeInput = (event) => {
    values.proficienciesAndLanguages[event.target.id.split(' ')[0]][event.target.name] = event.target.value;
    updateCharacter(values);
  };
  const addNewItem = (e) => {
    const newProf = {
      id: uuidv4(),
      title: '',
      content: '',
    };
    e.preventDefault();
    values.proficienciesAndLanguages.push(newProf);
    updateCharacter(values);
  };
  return (
    <div className="character-component">
      <div className="character-component__heading">
        <h3 className="character-component__title">Other Proficiencies & Languages</h3>
      </div>
      <div className="character-component__content character-component__content--character-prof">

        {data.proficienciesAndLanguages.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={item.id} className="character-component__item character-component__titled-text">
            <label id={`${index} ${item.title}`} htmlFor={`${item.title}`}>
              <div className="character-component__input--wrap character-component__input--titled-text">
                <input
                  id={index}
                  type="text"
                  className="character-component__input character-component__input--title"
                  placeholder="other proficiencies"
                  name="title"
                  value={item.title}
                  onChange={(e) => handleChangeInput(e)}
                />
                <textarea
                  id={index}
                  className="character-component__input character-component__input--content"
                  placeholder="common, dwarvish, etc"
                  name="content"
                  rows={1 + (item.content.length / 22)}
                  value={item.content}
                  onChange={(e) => handleChangeInput(e)}
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
            Add Section
          </button>
        </div>
      </div>
    </div>
  );
}
