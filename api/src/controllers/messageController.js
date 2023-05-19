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
    const { response, userId, senderId, recipientId } = req.body;
    try {
      const create = await Message.create({ response, userId, senderId, recipientId });
      res.status(200).json(create);
    } catch (error) {
      next(error);
    }
  },

  putMessage: async (req, res, next) => {
    const { id } = req.params;
    const { response } = req.body;
    try {
      let resp = await Message.findByPk(id);
      const update = await resp.update({ response });
      res.status(200).json(update);
    } catch (error) {
      next(error);
    }
  },

  deleteMessage: async (req, res, next) => {
    const { id } = req.params;
    try {
      let searchMessage = await Message.findByPk(id);
      const delMessage = await searchMessage.destroy({where: {id: id}});
      res.status(200).send("Message deleted");
    } catch (error) {
      next(error)
    }
  }
};