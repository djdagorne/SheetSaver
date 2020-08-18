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
          test
        </div>
        <div className="character-component">
          test
        </div>
        <div className="character-component">
          test
        </div>
        <div className="character-component">
          test
        </div>
        <div className="character-component">
          test
        </div>
      </div>
    </main>
  );
}
