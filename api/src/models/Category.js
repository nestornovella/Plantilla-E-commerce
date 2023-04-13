const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define("Category", {

    type_product: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
    
  })
}