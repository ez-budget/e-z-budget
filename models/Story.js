const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// create Story model
class Story extends Model {}

// create fields/columns for Story model
Story.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    story_title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    story_body: {
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
    modelName: 'story'
  }
);

module.exports = Story;
