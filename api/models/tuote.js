'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TuoteSchema = new Schema({
  id: {
    type: Number
  },
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  price: {
    type: Number
  },
  description: {
	  type: String
  },
  collectionName: {
	  type: String
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Tuotteet', TuoteSchema);