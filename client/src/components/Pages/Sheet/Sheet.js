import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import Health from './SubComponents/Health';
import Abilities from './SubComponents/Abilities';
import SavingThrows from './SubComponents/SavingThrows';

const ENDPOINT = 'http://localhost:5000/';
const socket = io(ENDPOINT);
/* import './SheetPage.css'; */

const sample = {
  health: {
    tempHP: 0,
    currentHP: 0,
    maxHP: 0,
    hitDie: '0d0',
    hitDice: 0,
    saveOne: undefined,
    saveTwo: undefined,
    saveThree: undefined,
    failOne: undefined,
    failTwo: undefined,
    failThree: undefined,
    armorClass: 0,
    initiative: 0,
    speed: 0,
  },
  abilities: {
    strScore: 0,
    strMod: 0,
    dexScore: 0,
    dexMod: 0,
    conScore: 0,
    conMod: 0,
    intScore: 0,
    intMod: 0,
    wisScore: 0,
    wisMod: 0,
    chaScore: 0,
    chaMod: 0,
  },
  saves: {
    strength: 0,
    strengthProf: false, // todo finish
  },
};

export default function Sheet() {
  const [character, updateCharacter] = useState(sample);
  // TODO memoization here to make sure
  // all components aren't re-rendered every time object changes?

  useEffect(() => {
    socket.on('server-to-client', (data) => {
      updateCharacter(data);
      if (character !== data) {
        updateCharacter(data);
      }
    });
    return () => {
      socket.off();
    };
  }, [character]);

  const handleChange = (data) => {
    socket.emit('client-to-server', data, (connectionError) => {
      if (!connectionError) {
        updateCharacter(data);
      }
    });
    return () => {
      socket.off();
    };
  };

  return (
    <main className="char-sheet">
      <h2 className="char-sheet__title">Name Here</h2>
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
        <div className="character-component">
          test1
        </div>
        <div className="character-component">
          test2
        </div>
        <div className="character-component">
          test3
        </div>
        <div className="character-component">
          test4
        </div>
        <div className="character-component">
          test5
        </div>
        <div className="character-component">
          test6
        </div>
        <div className="character-component">
          test7
        </div>
      </div>
    </main>
  );
}
