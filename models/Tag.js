const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

//create Tag model
class Tag extends Model {}

//generate Table for Tag model
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    tag_name: {
      type: DataTypes.STRING,
      defaultValue: "Misc",
    }
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tag",
  }
);

module.exports = Tag;
