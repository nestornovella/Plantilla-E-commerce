const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Shoping_cart", {

    id: {
      type: DataTypes.UUID,
        allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    products_amount: {
      type: DataTypes.JSON,
    },
    total: {
      type: DataTypes.FLOAT,
    },
  },{ timestamps: false });
};
