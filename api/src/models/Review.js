const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Review", {
    
    comment: {
      type: DataTypes.TEXT,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },

  });
};
