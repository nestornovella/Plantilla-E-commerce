const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Response", {

    response: {
      type: DataTypes.TEXT,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },

  });
};
