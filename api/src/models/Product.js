const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Product", {

    image: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    },
    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull:false
    },
    sold_product: {
      type: DataTypes.INTEGER
    },
    price: {
      type: DataTypes.FLOAT
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    
  });
};
