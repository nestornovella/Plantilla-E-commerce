const {DataTypes, UUIDV4} = require('sequelize')


function users (sequelizeInastance){

    sequelizeInastance.define("User", {
        id:{
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey:true,
            allowNull:false
        },
        name:{
            type:DataTypes.STRING
        }
    })

}


module.exports = users