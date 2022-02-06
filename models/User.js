const { Model, DataTypes } = require('sequelize');

const bcrypt = require ('bcrypt')

const sequelize = require('../config/connection.js');

//create User model
class User extends Model {
  // checks password 
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

//generate Table for User model
User.init(
 {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    username: {
        type: DataTypes.STRING,
        allowNull:false,
        validate: {
            notNull: {
              msg: 'Please enter your name'
            }
        }
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        }
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [8,15]
        }
      }
    },
    
    {
        hooks: {
          //pasword encyption upon creation of new user
            async beforeCreate(newUserData) {
              newUserData.password = await bcrypt.hash(newUserData.password, 10);
              return newUserData;
            },
            //password encryption upon updating user password
            async beforeUpdate(updatedUserData) {
              updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
              return updatedUserData;
            }
        },

        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
      }
);

module.exports = User;