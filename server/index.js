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
    currentHP: null,
    maxHP: null,
    tempHP: null,
    hitDie: '',
    hitDice: null,
    saves: {
      success: [true, false, false],
      fail: [false, false, false],
    },
    armorClass: null,
    initiative: null,
    speed: null,
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
    console.log(data);
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
