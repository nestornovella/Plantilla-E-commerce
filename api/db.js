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

const models = []
// traer modelos
fs.readdirSync(path.join(__dirname, "src", "models"))
.filter(dir => dir.indexOf('.') != 0 && dir.slice(-3) === ".js")
.forEach(dir => models.push(require(path.join(__dirname, "src", "models", dir))))

//inyeccion de sequelize
models.forEach(model => model(sequelize))

//muchos a muchos

const {Category, Product, Response, Review, Shoping_cart, Transaction, User } = sequelize.models

Transaction.belongsTo(User, {foreignKey:{name: "User_id"}}) //transaccion pertenece a usuario
User.hasMany(Transaction, {foreignKey:{name: "User_id"}})                              //tiene muchas transacciones

Transaction.belongsToMany(Product, {through:"products-transactions"}) //relacion muchos a muchos
Product.belongsToMany(Transaction, {through:"products-transactions"}) // relacion muchos amuchos

User.hasOne(Shoping_cart)                                              //selacion 1 a 1
Shoping_cart.belongsTo(User)  

Shoping_cart.belongsToMany(Product, {through: "cart-products"})    //relacion muchos a muchos
Product.belongsToMany(Shoping_cart, {through: "cart-products"})




console.log(sequelize.models)
module.exports = {
    ...sequelize.models,
    connection: sequelize,
}