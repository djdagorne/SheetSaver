const mongoose = require('mongoose');
require('dotenv').config();

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
