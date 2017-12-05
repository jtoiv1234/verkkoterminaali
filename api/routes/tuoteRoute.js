'use strict';
module.exports = function(app) {
  var tuote = require('../controllers/tuoteController');

  // todoList Routes
  app.route('/collection/:collectionId')
    .get(tuote.list_collection_products)
	.post(tuote.create_a_product);


  app.route('/collection/:collectionId/:tuoteId')
    .get(tuote.read_a_product)
    .put(tuote.update_a_product)
    .delete(tuote.delete_a_product);
};