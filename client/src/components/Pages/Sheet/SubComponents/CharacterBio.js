/* eslint-disable react/prop-types */
import React from 'react';

export default function CharacterBio({ data, updateCharacter }) {
  const values = { ...data };
  const handleChangeInput = (event) => {
    values.bio[event.target.id.slice(' ')[0]][event.target.name] = event.target.value;
    updateCharacter(values);
  };
  return (
    <div className="character-component">
      <div className="character-component__heading">
        <h3 className="character-component__title">Character Bio</h3>
      </div>
      <div className="character-component__content">
        {data.bio.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index} className="character-component__item character-component__bio">
            <div className="character-component__input--wrap character-component__input--titled-text">
              <label id={`${index} spell`} htmlFor={`${item.title}`}>
                <textarea
                  id={`${index} content`}
                  className="character-component__input character-component__input--content character-component__input--bio-content"
                  placeholder={`${item.title} description`}
                  name="content"
                  rows={2 + (item.content.length / 22)}
                  value={item.content}
                  onChange={(e) => handleChangeInput(e)}
                />
                <h4 className="character-component__label-title">{item.title}</h4>
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
