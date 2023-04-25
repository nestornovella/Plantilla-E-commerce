const axios = require("axios");
const { Shoping_cart } = require("../../db");

const getShopping = async (req, res) => {
  const data = await Shoping_cart.findAll();
  res.json(data);
};

const postShopping = async (req, res) => {
  const { products_amount } = req.body;
  try {
    if (!products_amount) {
      throw "no se pasaron parametros";
    }
    console.log(req.body);

    const cart = await Shoping_cart.create(req.body);

    res.json(cart);
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  getShopping,
  postShopping
}