const Product = require('../models').Product;

module.exports = {
  create(req, res) {
    return Product
      .create({
        productId: req.body.productId,
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock,
        description:req.body.description
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },
  list(req,res){
    return Product
    .all()
    .then(products => res.status(200).send(products))
    .catch(error => res.status(400).send(error));
  },
};
