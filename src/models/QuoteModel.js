const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('quote', {
        author : {
            type: DataTypes.STRING,
            allowNull:false,
        },
        quote : {
            type: DataTypes.TEXT,
            allowNull:false,
        },
        // usamos el createdAt que sequelize crea por 
        // default para llenar este campo virtual
        consultation_date : {
            type: DataTypes.VIRTUAL,
            get(){
                return this.getDataValue('createdAt')
            },
            set(value){
                throw new Error('Do not try to set the "consultation_date" value!')
            }
        }

    })
}