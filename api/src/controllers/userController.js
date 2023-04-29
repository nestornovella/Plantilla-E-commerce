const { User } = require("../../db");

function throwError(message) {
  throw message;
}

module.exports = {
  getUsers: async (req, res, next) => {
    try {
      const allData = await User.findAll();
      res.status(200).json(allData);
    } catch (error) {
      next(error);
    }
  },

  getUserId: async (req, res, next) => {
    //const {id} = req.params;
    try {
      const data = await User.findByPk(req.params.id);
      const newData = Object.keys(data)
//console.log(newData.length)
      if(newData.length) res.status(200).json(data)
      else res.status(400).send('missing data');
    } catch (error) {
      return ({ error: error.message });
    }
  },

  postUser: async (req, res, next) => {
    const {
      full_name,
      email,
      password,
      is_admin,
      status,
      image,
      addres,
      phone,
      country,
      city,
    } = req.body;
    try {
      const users = await User.findOrCreate({
        where: {
          email: email,
        },
        defaults: {
          full_name,
          email,
          password,
          is_admin,
          status,
          image,
          addres,
          phone,
          country,
          city,
        },
      });
//console.log(users.length)
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  },

  putUser: async (req, res, next) => {
    const { id } = req.params;
    const {full_name, email, password, image, addres, phone, country, city, is_admin, status} = req.body
    try {
      let putUser = await User.findByPk(id);
      let updatedUser = await putUser.update({full_name, email, password, image, addres, phone, country, city, is_admin, status})
//console.log(updatedUser);
      res.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
  },
};
