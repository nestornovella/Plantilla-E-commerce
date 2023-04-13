
const { DataTypes, UUIDV4} = require('sequelize')



function Shoping_cart (sequelizeInstance){
    sequelizeInstance.define('Shoping_cart', {
        id:{
            type:DataTypes.UUID,
            allowNull: false,
            primaryKey:true,
            defaultValue:UUIDV4
        },
        products_amount:{
            type:DataTypes.JSON
        },
        total:{
            type:DataTypes.FLOAT
        }
    },{timestamps:false})
}


module.exports = Shoping_cart