'use strict';
module.exports = function(app) {
  let drinksCtrl = require('./controllers/DrinksController');

  // todoList Routes
  app.route('/drinks')
    .get(drinksCtrl.get)
    .post(drinksCtrl.store);

  app.route('/drinks/:drinkId')
    .get(drinksCtrl.detail)
    .put(drinksCtrl.update)
    .delete(drinksCtrl.delete);
};