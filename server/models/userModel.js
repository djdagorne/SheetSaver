const { isEmail } = require('validator');
const mongoose = require('mongoose');

/*
  user objects will have a email, password, name and list of owned sheets,
  and eventually a list of authorized docs.
*/

const UserSchema = new mongoose.Schema({
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
  sheets: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'sheet',
  }],
});

const User = mongoose.model('user', UserSchema);

UserSchema.pre('remove', (next) => {
  const Sheets = mongoose.model('sheets');

  Sheets.deleteMany({ _id: { $in: User.sheets } }).then(() => next());
});

module.exports = User;
