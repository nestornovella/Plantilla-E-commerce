require('dotenv').config()
const {Sequelize} = require('sequelize')
const path = require('path')
const fs = require('fs')



const sequelize = new Sequelize(process.env.SEQUELIZE_URL,{
    native:false,
    protocol:"postgres",
    dialect:"postgres",
    logging:false
})

// traer modelos
fs.readdirSync(path.join(__dirname, "src", "models"))
.filter(dir => dir.indexOf('.') != 0 && dir.slice(-3)=== ".js")
.forEach(dir => require(path.join(__dirname, "src", "models", dir))(sequelize))




console.log("models:", sequelize.models)
module.exports = {
    ...sequelize.models,
    connection: sequelize,
}