// check the name and location before we seed
const { SolveTag } = require('../models');

const solveTagData = [
  {
    solution_id: 1,
    tag_id: 1
  },
  {
    solution_id: 1,
    tag_id: 2
  },
  {
    
    solution_id: 1,
    tag_id: 3
  },
  {
    solution_id: 1,
    tag_id: 5
  },
  {
    solution_id: 1,
    tag_id: 8
  },
  {
    
    solution_id: 2,
    tag_id: 2
  },
  {
    solution_id: 2,
    tag_id: 4
  },
  {
    solution_id: 2,
    tag_id: 6
  },
  {
    
    solution_id: 2,
    tag_id: 7
  },
  {
    solution_id: 3,
    tag_id: 1
  },
  {
    solution_id: 3,
    tag_id: 2
  },
  {
    
    solution_id: 3,
    tag_id: 3
  },
  {
    solution_id: 3,
    tag_id: 5
  },
  {
    solution_id: 3,
    tag_id: 8
  },
  {
    
    solution_id: 4,
    tag_id: 9
  },
  {
    solution_id: 4,
    tag_id: 10
  },
  {
    solution_id: 4,
    tag_id: 11
  },
  {
    
    solution_id: 4,
    tag_id: 17
  },
  {
    solution_id: 5,
    tag_id: 9
  },
  {
    solution_id: 5,
    tag_id: 11
  },
  {
    
    solution_id: 6,
    tag_id: 12
  },
  {
    solution_id: 6,
    tag_id: 13
  },
  {
    solution_id: 7,
    tag_id: 14
  },
  {
    
    solution_id: 9,
    tag_id: 15
  },
  {
    solution_id: 9,
    tag_id: 16
  },
  {
    
    solution_id: 9,
    tag_id: 17
  }
];

// if model is not 'solvetag' update this function
const seedSolveTag = () => SolveTag.bulkCreate(solveTagData);

module.exports = seedSolveTag;