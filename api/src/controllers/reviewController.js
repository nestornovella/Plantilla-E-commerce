const axios = require("axios");
const { Review } = require("../../db");

module.exports = {

  getReview: async (req, res, next) => {
    try {
      throwError("no not found");
    } catch (error) {
      next(error);
    }
  },

  postReview: async (req, res, next) => {
    try {

    } catch (error) {
      next(error);
    }
  },

  putReview: async (req, res, next) => {
    try {
      
    } catch (error) {
      next(error);
    }
  },
};