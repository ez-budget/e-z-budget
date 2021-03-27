const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Budget extends Model { }

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
    total_budget: {
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
    modelName: 'budget'
  }
);

module.exports = Budget;

/*const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create Budget model
class Budget extends Model {}

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
      allowNull: false
  
      
    },
    income_source: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    income_receipt: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
    },
    income_remark: {
        type: DataTypes.STRING,
        allowNull: true
        
        
    },
    expense_item: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
    },
    expense_payment: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
        len: [1]
        }
    },
    expense_comment: {
      type: DataTypes.STRING,
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
    modelName: 'budget'
  }
);

module.exports = Budget;*/
