// check the name and location before we seed
const { SolveTag } = require('../models');

const solveTagData = [
  {
    solve_id: 1,
    tag_id: 1
  },
  {
    solve_id: 1,
    tag_id: 2
  },
  {
    
    solve_id: 1,
    tag_id: 3
  },
  {
    solve_id: 1,
    tag_id: 5
  },
  {
    solve_id: 1,
    tag_id: 8
  },
  {
    
    solve_id: 2,
    tag_id: 2
  },
  {
    solve_id: 2,
    tag_id: 4
  },
  {
    solve_id: 2,
    tag_id: 6
  },
  {
    
    solve_id: 2,
    tag_id: 7
  },
  {
    solve_id: 3,
    tag_id: 1
  },
  {
    solve_id: 3,
    tag_id: 2
  },
  {
    
    solve_id: 3,
    tag_id: 3
  },
  {
    solve_id: 3,
    tag_id: 5
  },
  {
    solve_id: 3,
    tag_id: 8
  },
  {
    
    solve_id: 4,
    tag_id: 9
  },
  {
    solve_id: 4,
    tag_id: 10
  },
  {
    solve_id: 4,
    tag_id: 11
  },
  {
    
    solve_id: 4,
    tag_id: 17
  },
  {
    solve_id: 5,
    tag_id: 9
  },
  {
    solve_id: 5,
    tag_id: 11
  },
  {
    
    solve_id: 6,
    tag_id: 12
  },
  {
    solve_id: 6,
    tag_id: 13
  },
  {
    solve_id: 7,
    tag_id: 14
  },
  {
    
    solve_id: 9,
    tag_id: 15
  },
  {
    solve_id: 9,
    tag_id: 16
  },
  {
    
    solve_id: 9,
    tag_id: 17
  }
];

// if model is not 'solvetag' update this function
const seedSolveTag = () => SolveTag.bulkCreate(solveTagData);

module.exports = seedSolveTag;