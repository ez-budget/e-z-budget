const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Finance extends Model {}

Finance.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true


    },
       finance_title: { 
         type: DataTypes.STRING,
        allowNull: false
    }, 

      budget_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'budget',
        key: 'id'
      }
    }     
  },
  
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'finance'
  }
);

module.exports = Finance;