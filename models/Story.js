const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
<<<<<<< HEAD
// create Story model
class Story extends Model {}

// create fields/columns for Story model
Story.init(
=======
// create Post model
class Post extends Model {}

// create fields/columns for Post model
Post.init(
>>>>>>> 3892fc2d35ef83d6317044723d400590d3152f52
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
<<<<<<< HEAD
    modelName: 'story'
  }
);

module.exports = Story;
=======
    modelName: 'post'
  }
);

module.exports = Post;
>>>>>>> 3892fc2d35ef83d6317044723d400590d3152f52
