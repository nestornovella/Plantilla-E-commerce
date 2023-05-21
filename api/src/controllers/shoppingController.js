const axios = require("axios");
const { Shoping_cart } = require("../../db");

module.exports = {
  
  getShopping : async (req, res) => {
    const data = await Shoping_cart.findAll();
    res.status(200).json(data);
  },

  postShopping : async (req, res) => {
    const { products_amount, total, UserId } = req.body;
    try {
      if (!products_amount) {
        throw "no se pasaron parametros";
      }
  //console.log(req.body);
      const cart = await Shoping_cart.create(req.body);
      res.status(200).json(cart);
      
    } catch (error) {
      next(error)
    }
  },

  putShopping : async (req, res, next) => {
    const { id } = req.params;
    const { products_amount, total, UserId } = req.body;
    try {
      const data = await Shoping_cart.findByPk(id);
      const response = await data.update(req.body);
      res.status(200).json(response);
    } catch (error) {
      next(error)
    }
  },
}