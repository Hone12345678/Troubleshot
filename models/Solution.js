const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

//create Solution model
class Solution extends Model {}

//generate Table for Solution model
Solution.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
              msg: 'What are you trying to answer?'
            }
        }
    },

    solution: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

    priority: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isNumeric: true,
            max: 5,
            min: 1,
        }
    },
    
    category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "category",
          key: "id",
        },
      },
      
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "user",
          key: "id",
        },
      },
      
      page_views: {
        type:DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      }
    },
    
      {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "solution",
  }
);

module.exports = Solution;
