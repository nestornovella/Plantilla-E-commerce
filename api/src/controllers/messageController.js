const axios = require("axios");
const { Message } = require("../../db");

module.exports = {

  getMessage: async (req, res, next) => {
    try {
      throwError("no funciona");
    } catch (error) {
      next(error);
    }
  },

  postMessage: async (req, res, next) => {
    try {

    } catch (error) {
      next(error);
    }
  },

  putMessage: async (req, res, next) => {
    try {
      
    } catch (error) {
      next(error);
    }
  },
};