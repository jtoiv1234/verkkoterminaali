'use strict';
module.exports = function(app) {
  var tuote = require('../controllers/tuoteController');

  // todoList Routes
  app.route('/collection/:collectionId')
    .get(tuote.list_all_products)


  app.route('/collection/:collectionId/:tuoteId')
    .get(tuote.read_a_product)
};