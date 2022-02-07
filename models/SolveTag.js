const { Model, DataTypes } = require("sequelize");

const sequelize = require("../../Troubleshot/config/connection.js");

//create Solvetag model
class SolveTag extends Model {}

//generate Table for Solvetag model
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
        model: "tag",
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
