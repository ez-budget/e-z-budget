


const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create Budget model
class Budget extends Model { }

// create fields/columns for Budget model
Budget.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    budget_title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }

    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
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
