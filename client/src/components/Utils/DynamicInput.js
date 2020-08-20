import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const ENDPOINT = 'http://localhost:5000/';
const socket = io(ENDPOINT);

// TODO  make inputName change the server emitters, keep data separate

export default function DynamicInput() {
  const [value, setValue] = useState('');

  useEffect(() => {
    socket.on('server-to-client', (data) => {
      setValue(data);
      if (value !== data) {
        setValue(data);
      }
    });
    return () => {
      socket.off();
    };
  });

  const handleChange = (data) => {
    if (data === '') {
      setValue('');
    }
    socket.emit('client-to-server', data, (connectionError) => {
      if (connectionError) {
        setValue(data);
      }
    });
    return () => {
      socket.off();
    };
  };

  return (
    <textarea value={value} onChange={(event) => handleChange(event.target.value)} />
  );
}
