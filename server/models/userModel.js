const { isEmail } = require('validator');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    validate: [isEmail, 'Invalid email format.'],
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  username: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('user', userSchema);
module.exports = User;
