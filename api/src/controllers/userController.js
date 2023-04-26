const { User } = require("../../db");

function throwError(message) {
  throw message;
}

module.exports = {
  postUser: async (req, res, next) => {
    const { email } = req.body;
    try {
      const emailVerify = await User.findAll({ where: { email } });

      const newUser = await User.create(req.body);
    } catch (error) {
      next(error);
    }
  },

  getUser: async (req, res, next) => {
    try {
      throwError("no funciona");
    } catch (error) {
      next(error);
    }
  },
};
