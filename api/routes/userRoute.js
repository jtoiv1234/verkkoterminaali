'use strict';
module.exports = function(app) {
  var userController = require('../controllers/userController');

  app.route('/users')
    .get(userController.getUsers)
	  .post(userController.createUser);

  app.route('/users/:userId')
    .get(userController.getUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser);
};
