import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import sample from '../../Utils/SampleCharacter';

import Health from './SubComponents/Health';
import Abilities from './SubComponents/Abilities';
import SavingThrows from './SubComponents/SavingThrows';
import Skills from './SubComponents/Skills';
import ProficienciesAndLanguages from './SubComponents/ProficienciesAndLanguages';
import AttacksAndSpellcasting from './SubComponents/AttacksAndSpellcasting';
import Equipment from './SubComponents/Equipment';
import CharacterBio from './SubComponents/CharacterBio';
import PrimaryDetails from './SubComponents/PrimaryDetails';

const ENDPOINT = 'http://localhost:5000/';
const socket = io(ENDPOINT);

export default function Sheet() {
  const [character, setCharacter] = useState(sample);
  // TODO memoization here to make sure
  //    all components aren't re-rendered every time object changes?

  // TODO rework labels to be around individual inputs?
  // TODO spell slot tracker
  // BONUS dice roller?

  // TODO maybe get a search bar to drop from
  //    from the nav so player can filter components ?

  // TODO make radio/checkbox buttons more interesting.
  //      maybe a box with dim text that goes dark on checked=true
  useEffect(() => {
    socket.on('server-to-client', (data) => {
      setCharacter(data);
      if (character !== data) {
        setCharacter(data);
      }
    });
    return () => {
      socket.off();
    };
  }, [character]);

  const handleChange = (data) => {
    setCharacter(data);
    socket.emit('client-to-server', data, (connectionError) => {
      if (connectionError) {
        console.log('conn err');
      }
    });
    return () => {
      socket.off();
    };
  };

  return (
    <main className="char-sheet">
      <PrimaryDetails
        data={character}
        updateCharacter={handleChange}
      />
      <div className="char-sheet__components">
        <Health
          data={character}
          updateCharacter={handleChange}
        />
        <Abilities
          data={character}
          updateCharacter={handleChange}
        />
        <SavingThrows
          data={character}
          updateCharacter={handleChange}
        />
        <Skills
          data={character}
          updateCharacter={handleChange}
        />
        <ProficienciesAndLanguages
          data={character}
          updateCharacter={handleChange}
        />
        <AttacksAndSpellcasting
          data={character}
          updateCharacter={handleChange}
        />
        <Equipment
          data={character}
          updateCharacter={handleChange}
        />
        <CharacterBio
          data={character}
          updateCharacter={handleChange}
        />
      </div>
    </main>
  );
}
