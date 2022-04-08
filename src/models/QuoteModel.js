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
        },
        consultation_date : {
            type: DataTypes.DATE,
            get: function() { // or use get(){ }
                return this.getDataValue('consultation_date')
                  .toLocaleString('en-US', { 
                      month:'numeric',
                      day: 'numeric',
                      year:'numeric',
                      hour: 'numeric',
                      minute: 'numeric',
                      second: 'numeric'
                    });
              }
        }
    },{
        createdAt: 'consultation_date',
        updatedAt: false
    }
    )
}