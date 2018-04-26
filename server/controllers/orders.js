const Order = require('../models').Order;

module.exports = {
  create(req, res) {
    return Order
      .create({
        orderId: req.body.orderId,
        subtotal: req.body.subtotal,
        total: req.body.total,
        userId: req.params.userId
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },
  list(req,res){
    return Order
    .findAll({
      include:[{
        model: Product,
        as:'orderProducts'
      }],
    })
    .then(orders => res.status(200).send(orders))
    .catch(error => res.status(400).send(error));
  },
};
