const axios = require("axios");
const { Product, Category } = require("../../db");

module.exports = {

  getAllProduct: async (req, res, next) => {
    
    try {
      const response = await Product.findAll({
        include: {
          model: Category,
        }
      });
      res.status(200).json(response)
    } catch (error) {
      next(error);
    }
  },

  getProductById: async (req, res, next) => {
    const { id } = req.params;
    try {
      const prodct = await Product.findByPk(id, {
        include: {
          model: Category,
          attributes: ["id", "name", "type_product"]
        }
      });
      res.status(200).json(prodct);
    } catch (error) {
      next(error);
    }
  },

  postProduct: async (req, res, next) => {
    const { image, name, stock, sold_product, price } = req.body;

    try {
      const prodtc = await Product.findAll({where: {name: name}});
      const postProdct = await Product.create(req.body);
      res.status(200).json(postProdct);
    } catch (error) {
      next(error);
    }
  },

  putProduct: async (req, res, next) => {
    const { id } = req.params;
    const { image, name, stock, sold_product, price, status } = req.body;

    try {
      const data = await Product.findOne({id});
      const response = await data.update(req.body);
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  },
};