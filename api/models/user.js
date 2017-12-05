'use strict';
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: 'Kindly enter the user login name'
  },
  email: {
    type: String,
    required: 'Kindly enter the email address'
  },
  displayName: {
    type: String,
    required: 'Kindly enter the user display name'
  },
  password: {
    type: String,
    required: 'Password is required'
  }
});

module.exports = mongoose.model('User', UserSchema);
