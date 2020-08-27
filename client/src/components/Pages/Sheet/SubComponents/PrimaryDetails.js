/* eslint-disable react/prop-types */
import React from 'react';

export default function PrimaryDetails({ data, updateCharacter }) {
  const values = { ...data };
  const handleChangeInput = (event) => {
    values[event.target.name] = event.target.value;
    updateCharacter(values);
  };
  return (
    <>
      <label htmlFor="name" id="name">
        <textarea
          className="character-component__input--name"
          rows={1 + (data.name.length / 18)}
          id="name"
          name="name"
          placeholder="Name"
          value={data.name}
          onChange={(e) => handleChangeInput(e)}
        />
      </label>
      <label htmlFor="class" id="class">
        <input
          className="character-component__input character-component__input--title"
          id="class"
          name="class"
          placeholder="class"
          type="text"
          value={data.class}
          onChange={(e) => handleChangeInput(e)}
        />
      </label>
      <label htmlFor="race" id="race">
        <input
          className="character-component__input character-component__input--title"
          id="race"
          name="race"
          placeholder="race"
          type="text"
          value={data.race}
          onChange={(e) => handleChangeInput(e)}
        />
      </label>
      <label htmlFor="alignment" id="alignment">
        <input
          className="character-component__input character-component__input--title"
          id="alignment"
          name="alignment"
          placeholder="alignment"
          type="text"
          value={data.alignment}
          onChange={(e) => handleChangeInput(e)}
        />
      </label>
      <label htmlFor="background" id="background">
        <input
          className="character-component__input character-component__input--title"
          id="background"
          name="background"
          placeholder="background"
          type="text"
          value={data.background}
          onChange={(e) => handleChangeInput(e)}
        />
      </label>
    </>
  );
}
