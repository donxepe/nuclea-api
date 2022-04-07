const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('json', {
        content : {
            type: DataTypes.TEXT,
            allowNull: false
        },
        sorted_content : {
            type: DataTypes.TEXT,
        }

    })
}
