const seedCategory = require('./category-seeds');
const seedSolution = require('./solution-seeds');
const seedTag = require('./tag-seeds');
const seedSolveTag = require('./solvetag-seeds');
const seedUser = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  
}