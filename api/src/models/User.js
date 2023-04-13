const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("User", {

    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    password: {
      type: DataTypes.STRING
    },
    full_name: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING
    },
    addres: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.INTEGER,
    },
    country: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    is_admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
    
  });
}

