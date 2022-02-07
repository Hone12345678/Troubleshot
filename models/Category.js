const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

//create Category model
class Category extends Model {}

//generate Tabel for the Category model
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    user_id: {
      type: DataTypes.STRING,
      references: {
        model: "user",
        key: "email",
      }
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;
