const User = require('../models').User;

module.exports = {
  create(req, res) {
    return User
      .create({
        name: req.body.name,
        email: req.body.email,
        userId: req.body.userId,
        pass: req.body.pass,
        admin: req.body.admin
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },
  list(req,res){
    return User
    .all()
    .then(users => res.status(200).send(users))
    .catch(error => res.status(400).send(error));
  },
};
