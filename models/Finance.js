/*const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//class Finance extends Model { }

Finance.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Finance_title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    incomeName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    incomeAmount: {
      type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
        len: [1]
    }
    },
    expenseName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    expenseAmount: {
      type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
        len: [1]
        }
    },
    total_Finance: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    current_balance: {
        type: DataTypes.INTEGER,
        allowNull: false
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
    modelName: 'Finance'
  }
);

module.exports = Finance;*/