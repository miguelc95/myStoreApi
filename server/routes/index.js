const productsController = require('../controllers').products;
const ordersController = require('../controllers').orders;
const usersController = require('../controllers').users;


module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Hola Maestro!',
  }));

  app.post('/api/products', productsController.create);
  app.get('/api/products', productsController.list);
  app.post('/api/orders', ordersController.create);
  app.get('/api/orders', ordersController.list);
  app.post('/api/users', usersController.create);
  app.get('/api/users', usersController.list);
};
