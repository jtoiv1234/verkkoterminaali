'use strict';

var mongoose = require('mongoose'),
  Tuote = mongoose.model('Tuotteet');

exports.list_collection_products = function(req, res) {
  Tuote.find({'collectionName': req.params.collectionId}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.read_a_product = function(req, res) {
  Tuote.findById(req.params.tuoteId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.create_a_product = function(req, res) {
  var new_tuote = new Tuote(req.body);
  new_tuote.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.delete_a_product = function(req, res) {
  Tuote.remove({
    _id: req.params.tuoteId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};

exports.update_a_product = function(req, res) {
  Tuote.findOneAndUpdate({_id: req.params.tuoteId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};