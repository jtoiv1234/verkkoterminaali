'use strict';

var mongoose = require('mongoose'),
  Tuote = mongoose.model('Tuotteet');

exports.list_all_products = function(req, res) {
  Tuote.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.read_a_product = function(req, res) {
  Tuote.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};
