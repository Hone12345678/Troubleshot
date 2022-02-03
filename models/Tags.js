const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Tags extends Model {}

Tags.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    tags_name: {
      type: DataTypes.STRING,
      defaultValue: "Misc",
    }
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tags",
  }
);

module.exports = Tags;
