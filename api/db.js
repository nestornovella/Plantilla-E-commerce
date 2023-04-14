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

const {Category, Product, Response, Review, Shoping_cart, Transaction, User } = sequelize.models

//============>> RELACIONES <<============\\

User.hasOne(Shoping_cart)     // relacion 1 - 1 y se usa 
Shoping_cart.belongsTo(User)  // en combinacion con ".belongs to"

User.hasMany(Transaction, {foreignKey:{name: "User_id"}})    //tiene muchas transacciones
Transaction.belongsTo(User, {foreignKey:{name: "User_id"}}) //transaccion pertenece a un usuario

User.hasMany(Review);     // un usuario tiene muchas review y 
Review.belongsTo(User);   // una review solo pertenece a un usuario

Product.hasMany(Review);
Review.belongsTo(Product);

Product.belongsToMany(Category, {through: "product-category"}); //relacion muchos a muchos
Category.belongsToMany(Product, {through: "product-category"});

Product.belongsToMany(Transaction, {through:"products-transactions"}) 
Transaction.belongsToMany(Product, {through:"products-transactions"}) 

Product.belongsToMany(Shoping_cart, {through: "cart-products"})
Shoping_cart.belongsToMany(Product, {through: "cart-products"})    

Response.hasOne(Review);
Review.belongsTo(Response);

Response.hasOne(User);
User.belongsTo(Response);

console.log(sequelize.models)
module.exports = {
    ...sequelize.models,
    connection: sequelize,
}