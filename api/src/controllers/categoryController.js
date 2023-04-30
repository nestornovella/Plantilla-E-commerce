const axios = require("axios");
const { Category, Product } = require("../../db");

module.exports = {

  getCategory: async (req, res, next) => {
    try {
      const cate = await Category.findAll({include: {model: Product}});
      res.status(200).json(cate);
    } catch (error) {
      next(error);
    }
  },

  postCategory: async (req, res, next) => {
    const { name } = req.body;
    try {
      const postCategory = await Category.findOrCreate({where: {name: name}});
      res.status(200).json(postCategory);
      
    } catch (error) {
      next(error);
    }
  },

  putCategory: async (req, res, next) => {
    const id = req.params.id;
    const { name, type_product } = req.body;
    try {
      let categ = await Category.findByPk(id);
      const update = await categ.update({name, type_product});
      res.status(200).json(update)
    } catch (error) {
      next(error);
    }
  },

  deleteCategory: async (req, res, next) => {
    const id = req.params.id;
    try {
      let deleteCat = await Category.findByPk(id);
      const catDeleted = await deleteCat.destroy({where: {id: id}});
      res.status(200).send('Category deleted')
    } catch (error) {
      next(error)
    }
  }
};
