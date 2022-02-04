// need to check the name and location before we seed
const { Solution } = require('../models');

const solutionData = [
  {
    name: "server.js setup",
    solution: "const path = require('path'); const express = require('express');",
    priority: 1, 
    category_id: 1,
    user_id: 1
  },
  {
    name: "tailwind.config.js setup",
    solution: `
    module.exports = {
      content: [
        "./src/**/*.{html,js}",
        './dist/index.html',
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    `,
    priority: 1,
    category_id: 2,
    user_id: 1
  },
  {
    name: "Purpose",
    solution: "Npm package that helps you create a server",
    priority: 3,
    category_id: 3,
    user_id: 1

  },
  {
    name: "half and half subsitutions",
    solution: "you can subsitute equal parts whole milk and melted butter for half and half",
    priority: 5,
    category_id: 4,
    user_id: 2
  },
  {
    name: "ounces",
    solution: "there are 8 liquid ounces to a cup, but 16 ounces to a pound",
    priority: 2,
    category_id: 4,
    user_id: 2
  },
  {
    name: "pythagorean theorem",
    solution: "a^2 + b^2 = C^2",
    priority: 5,
    category_id: 5,
    user_id: 2
  },
  {
    name: "Delimiting data",
    solution: "1. Highlight the column you want to parse 2. Data drop down 3. Text to columes",
    priority: 1,
    category_id: 6,
    user_id: 3
  },
  {
    name: "Monthly Report Location",
    solution: "Q:/Archive/monthly",
    priority: 4,
    category_id: 6,
    user_id: 3
  },
  {
    name: "Metal Archives",
    solution: "https://www.metal-archives.com/",
    priority: 5,
    category_id: 7,
    user_id: 3
  }
];

// if model is not 'solvetag' update this function
const seedSolution = () => Solution.bulkCreate(solutionData);

module.exports = seedSolution;