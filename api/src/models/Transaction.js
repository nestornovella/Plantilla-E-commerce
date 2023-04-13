const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Transaction", {

    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    date: {
      type: DataTypes.DATEONLY,
    },
    status_shop: {
      type: DataTypes.ENUM('completed', 'pending', 'rejected'),
      defaultValue: 'pending'
    }

  });
};
