// need to check the name and location before we seed
const { User } = require('../models');

const userData = [
  {
    username: 'BradHole',
    email: 'whatsinthebox@juno.com',
    password: 'seven'
  },
  {
    username: 'Samara',
    email: 'inthewell@blockbuster.com',
    password: 'password'
  },
  {
    username: 'Hagrid',
    email: 'milkmustache@hogwarts.edu',
    password: 'password'
  }
];

// if model is not 'User' update this function
const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;