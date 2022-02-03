const seedCategory = require('./category-seeds');
const seedSolution = require('./solution-seeds');
const seedTag = require('./tag-seeds');
const seedSolveTag = require('./solvetag-seeds');
const seedUser = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--Seeding Users--');
  await seedUser();
  console.log('--Seeding Category--');
  await seedCategory();
  console.log('--Seeding Solution--');
  await seedSolution();
  console.log('--Seeding Tags--');
  await seedTag();
  console.log('--Seeding SolveTag--');
  await seedSolveTag();

  process.exit(0);
};

seedAll();