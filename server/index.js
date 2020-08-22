/* eslint-disable no-console */
const app = require('express')();
const http = require('http').createServer(app);
const cors = require('cors');
const io = require('socket.io')(http, cors());

require('./mongo.js');
require('dotenv').config();

const PORT = process.env.PORT || '5000';

// todo: set up timestamp on sheet object
let userInput = {
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
    strengthProf: false,
  },
};

app.use(cors());
app.use(require('express').json());
app.use('/users', require('./routes/userRouter'));

app.use('*', (req, res) => res.status(404).json({
  success: false,
  message: 'API endpoint doesn\'t exist',
}));

io.on('connection', (socket) => {
  console.log('client connected to socketio');
  io.emit('server-to-client', userInput);
  socket.on('client-to-server', (data) => {
    console.log(data.health);
    userInput = data;
    io.emit('server-to-client', userInput);
  });

  socket.on('disconnect', () => {
    console.log('client disconnected');
  });
});

http.listen(PORT, () => {
  console.log(`Listening on localhost:${PORT}`);
});
