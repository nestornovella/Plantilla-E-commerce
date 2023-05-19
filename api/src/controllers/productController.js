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
        include: [{
          model: Category,
          attributes: ["id", "name", "type_product"],
          through: {attributes: []}
        }]
      });
      res.status(200).json(prodct);
    } catch (error) {
      next(error);
    }
  },

  postProduct: async (req, res, next) => {
    const { image, name, stock, sold_product, price } = req.body;
    try {
      const post = await Product.create()
    } catch (error) {
      next(error);
    }
  },

  putProduct: async (req, res, next) => {
    try {
      
    } catch (error) {
      next(error);
    }
  },
};