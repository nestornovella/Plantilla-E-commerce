const axios = require("axios");
const { Transaction } = require("../../db");

module.exports = {

  getTransaction: async (req, res, next) => {
    try {
      throwError("no funciona");
    } catch (error) {
      next(error);
    }
  },

  postTransaction: async (req, res, next) => {
    try {

    } catch (error) {
      next(error);
    }
  },

  putTransaction: async (req, res, next) => {
    try {
      
    } catch (error) {
      next(error);
    }
  },
};