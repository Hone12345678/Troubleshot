// need to check the name and location before we seed
const { Category } = require('../models');

const catData = [
  {
    category_name: 'javascript',
    user_id: 1
  },
  {
    category_name: 'tailwind',
    user_id: 1
  },
  {
    category_name: 'express.js',
    user_id: 1
  },
  {
    category_name: 'cooking',
    user_id: 2
  },
  {
    category_name: 'trig',
    user_id: 2
  },
  {
    category_name: 'excel',
    user_id: 3
  },
  {
    category_name: 'music',
    user_id: 3
  },
  {
    category_name: 'javascript',
    user_id: 3
  }
];

// if model is not 'solvetag' update this function
const seedCategory = () => Category.bulkCreate(catData);

module.exports = seedCategory;