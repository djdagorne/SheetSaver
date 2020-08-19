import React, { useState, useEffect, useContext } from 'react';
import io from 'socket.io-client';

import Health from './SubComponents/Health';

const ENDPOINT = 'http://localhost:5000/';
const socket = io(ENDPOINT);
/* import './SheetPage.css'; */

const sample = {
  health: {
    currentHP: 29,
    maxHP: 30,
    tempHP: 10,
    hitDie: '1d8',
    hitDice: 3,
    saves: {
      success: [true, false, false],
      fail: [false, false, false],
    },
    armorClass: 13,
    initiative: 3,
    speed: 13,
  },
};

export default function Sheet() {
  const [character, updateCharacter] = useState(sample);
  // TODO memoization here to make sure
  // all components aren't re-rendered every time object changes?

  useEffect(() => {
    socket.on('server-to-client', (data) => {
      console.log(data);
      updateCharacter(data);
      if (character !== data) {
        updateCharacter(data);
      }
    });
    return () => {
      socket.off();
    };
  });

  const handleChange = (data) => {
    socket.emit('client-to-server', data, (connectionError) => {
      if (connectionError) {
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
      </div>
    </main>
  );
}
