const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Budget extends Model {}

budget.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    income: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    expenses: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    balance: {
      type: DataTypes.INTEGER,
      allowNull: false
      }
    
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'budget'
  }
);

module.exports = Budget;