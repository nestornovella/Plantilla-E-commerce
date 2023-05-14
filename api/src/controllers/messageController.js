const axios = require("axios");
const { Message } = require("../../db");

module.exports = {

  getMessage: async (req, res, next) => {

    try {
      const response = await Message.findAll();
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  },

  postMessage: async (req, res, next) => {
    const {  } = req.body;
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