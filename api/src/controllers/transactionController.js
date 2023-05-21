const axios = require("axios");
const { Transaction } = require("../../db");

module.exports = {

  getTransaction: async (req, res, next) => {
    try {
      const data = await Transaction.findAll();
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  },

  postTransaction: async (req, res, next) => {
    const { status_shop, UserId, date } = req.body;
    try {
      const data = await Transaction.create(req.body);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  },

  putTransaction: async (req, res, next) => {
    const id = req.params.id;
    const { status_shop, UserId, date } = req.body;
    try {
      const data = await Transaction.findByPk(id);
      const response = await data.update(req.body);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  },
};