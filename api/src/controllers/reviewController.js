const axios = require("axios");
const { Review } = require("../../db");

module.exports = {

  getReview: async (req, res, next) => {
    try {
      const data = await Review.findAll();
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  },

  postReview: async (req, res, next) => {
    const { comment, rating, UserId, ProductId } = req.body;
    try {
      const data = await Review.create(req.body);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  },

  putReview: async (req, res, next) => {
    const { id } = req.params;
    const { comment, rating } = req.body;
    try {
      const data = await Review.findByPk(id);
      const response = await data.update(req.body);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  },

  deleteReview: async (req, res, next) => {
    const { id } = req.params;
    try {
      const data = await Review.findByPk(id);
      const response = await data.destroy({id});
      res.status(200).send("Review deleted");
    } catch (error) {
      next(error);
    }
  }
};