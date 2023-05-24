const { Cart } = require('./models');

const addCart = function (req, res) {
  const cart = req.body;

  Cart.create(cart)
    .then((newCart) => {
      res.json(newCart);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const getCart = function (req, res) {
  Cart.findAll()
    .then((cart) => {
      res.json(cart);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const updateCart = function (req, res) {
  const cart = req.body;
  Cart.update(cart, {
    where: {
      id: cart.id
    }
  })
    .then((updatedCart) => {
      res.json(updatedCart);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const deleteCart = function (req, res) {
  const cart = req.body;
  Cart.destroy({
    where: {
      id: cart.id
    }
  })
    .then((deletedCart) => {
      res.json(deletedCart);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
