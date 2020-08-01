/* eslint-disable no-console */
const express = require('express');

const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server, { origins: '*:*' });
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// set up middleware
// express json parser
app.use(express.json());

const PORT = process.env.PORT || '5000';

// at this point we set up a cluster/db on mongodb atlas we
// make project, cluster, whitelist your IP if running locally...
// connect to cluster, find connection string

// set up mongoose

mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
);
mongoose.connection.on('connected', () => {
  console.log('Mongo has connected successfully.');
});
mongoose.connection.on('reconnected', () => {
  console.log('Mongo has reconnected successfully.');
});
mongoose.connection.on('error', (error) => {
  console.log('Mongo has an error: ', error);
  mongoose.disconnect();
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongo connection has disconnected.');
});

// set up routes
app.use('/users', require('./routes/userRouter'));

app.use('*', (req, res) => res.status(404).json({
  success: false,
  message: 'API endpoint doesn\'t exist',
}));

/* io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('join', () => {
    console.log('joining!');
  });
  socket.on('disconnect', () => {
    console.log('user disonnected');
  });
}); */

app.listen(PORT, () => {
  console.log(`Server has started on port: ${PORT}`);
});
