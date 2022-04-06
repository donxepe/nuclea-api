const { DataTypes } = require('sequelize');

module.exports  = (sequelize) => {
    sequelize.define('author', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}