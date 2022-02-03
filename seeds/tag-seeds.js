// need to check the name and location before we seed
const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'javascript',
  },
  {
    tag_name: 'coding',
  },
  {
    tag_name: 'fullstack',
  },
  {
    tag_name: 'front end',
  },
  {
    tag_name: 'back end',
  },
  {
    tag_name: 'tailwind',
  },
  {
    tag_name: 'css',
  },
  {
    tag_name: 'express',
  },
  {
    tag_name: 'cooking',
  },
  {
    tag_name: 'substitution',
  },
  {
    tag_name: 'tips',
  },
  {
    tag_name: 'trig',
  },
  {
    tag_name: 'geometry',
  },
  {
    tag_name: 'excel',
  },
  {
    tag_name: 'music',
  },
  {
    tag_name: 'metal',
  },
  {
    tag_name: 'hobby',
  }
];

// if model is not 'Tag' update this function
const seedTag = () => Tag.bulkCreate(tagData);

module.exports = seedTag;