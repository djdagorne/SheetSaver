import React, { useState, useEffect, useContext } from 'react';
import Health from './SubComponents/Health';
/* import './SheetPage.css'; */

export default function Sheet() {
  return (
    <main className="char-sheet">
      {/* TODO Char-sheet context provider wrapping sheet subcomponents? */}
      <h2 className="char-sheet__title">Name Here</h2>
      <div className="char-sheet__components">
        <Health />
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
