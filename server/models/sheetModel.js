const mongoose = require('mongoose');

/*
  Sheets will have all the character info on them, and an author id and
  eventually a authorized user list.
  any client with the author id or authorized userId in their JWT will
  have edit access enabled via the client.

  TODO get all data sorted
  TODO get create endpoint
  TODO get read endpoint
  TODO get update endpoint with both auth checks
  TODO get delete endpoint
*/

const SheetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
});

const Sheet = mongoose.model('sheet', SheetSchema);
module.exports = Sheet;
