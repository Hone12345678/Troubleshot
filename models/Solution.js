const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Solution extends Model {}

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
        type: DataTypes.STRING,
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
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "solution",
  }
);

module.exports = Solution;
