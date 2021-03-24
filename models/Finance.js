// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// // create Finance model
// class Finance extends Model {}

// // create fields/columns for Budget model
// Finance.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     income_source: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         len: [1]
//       }
//     },
//     income_receipt: {
//         type: DataTypes.DECIMAL,
//         allowNull: false,
//         validate: {
//           len: [1]
//         }
//     },
//     income_remark: {
//         type: DataTypes.STRING,
//         allowNull: true,
//         validate: {
//           len: [1]
//         }
//     },
//     expense_item: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//           len: [1]
//         }
//     },
//     expense_payment: {
//         type: DataTypes.DECIMAL,
//         allowNull: false,
//         validate: {
//         len: [1]
//         }
//     },
//     expense_comment: {
//         type: DataTypes.STRING,
//         allowNull: true,
//         validate: {
//         len: [1]
//         }
//     },
//     budget_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'budget',
//         key: 'id'
//       }
//     }
//   },
//   {
//     sequelize,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'finance'
//   }
// );

// module.exports = Finance;
