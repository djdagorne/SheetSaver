import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import Health from './SubComponents/Health';
import Abilities from './SubComponents/Abilities';
import SavingThrows from './SubComponents/SavingThrows';
import Skills from './SubComponents/Skills';

import sample from '../../Utils/SampleCharacter';

// TODO make radio/checkbox buttons more interesting.
//      maybe a box with dim text that goes dark on checked=true

const ENDPOINT = 'http://localhost:5000/';
const socket = io(ENDPOINT);

export default function Sheet() {
  const [character, updateCharacter] = useState(sample);
  // TODO memoization here to make sure
  //    all components aren't re-rendered every time object changes?

  // TODO maybe get a search bar to drop from
  //    from the nav so player can filter components ?
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
        <Skills
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
