const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('quote', {
        id : {
            type: DataTypes.STRING,
            allowNull:false,
            primaryKey: true
        },
        quote : {
            type: DataTypes.TEXT,
            allowNull:false,
        }
    },{
        createdAt: 'consultation_date',
        updatedAt: false
    }
    )
}