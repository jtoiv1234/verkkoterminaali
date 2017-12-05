'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TuoteSchema = new Schema({
  _id: {
    type: String,
	required: "Id is required"
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