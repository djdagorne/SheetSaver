import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      <h2>Secured Route, Home</h2>
      <Link to="/Sheet">Sheet</Link>
    </main>
  );
}
