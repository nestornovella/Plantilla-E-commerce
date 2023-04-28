const axios = require("axios");
const { Product } = require("../../db");

module.exports = {

  getProduct: async (req, res, next) => {
    try {
      throwError("no funciona");
    } catch (error) {
      next(error);
    }
  },

  postProduct: async (req, res, next) => {
    try {

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