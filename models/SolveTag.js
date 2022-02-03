const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class SolveTag extends Model {}

SolveTag.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

    solution_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "solution",
        key: "id",
      },
    },

    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "tags",
        key: "id",
      },
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "solvetag",
  }
);

module.exports = SolveTag;
