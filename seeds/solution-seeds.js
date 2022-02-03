// need to check the name and location before we seed
const { Solution } = require('../models');

const solutionData = [
  {
    category_id: 1,
    user_id: 1,
    name: "server.js setup",
    solve: "const path = require('path'); const express = require('express');" 
  },
  {
    category_id: 2,
    user_id: 1,
    name: "tailwind.config.js setup",
    solve: `
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
    `
  },
  {
    category_id: 3,
    user_id: 1,
    name: "Purpose",
    solve: "Npm package that helps you create a server"

  },
  {
    category_id: 4,
    user_id: 2,
    name: "half and half subsitutions",
    solve: "you can subsitute equal parts whole milk and melted butter for half and half"

  },
  {
    category_id: 4,
    user_id: 2,
    name: "ounces",
    solve: "there are 8 liquid ounces to a cup, but 16 ounces to a pound"

  },
  {
    category_id: 5,
    user_id: 2,
    name: "pythagorean theorem",
    solve: "a^2 + b^2 = C^2"

  },
  {
    category_id: 6,
    user_id: 3,
    name: "Delimiting data",
    solve: "1. Highlight the column you want to parse 2. Data drop down 3. Text to columes"

  },
  {
    category_id: 6,
    user_id: 3,
    name: "Monthly Report Location",
    solve: "Q:/Archive/monthly"

  },
  {
    category_id: 7,
    user_id: 3,
    name: "Metal Archives",
    solve: "https://www.metal-archives.com/"

  }
];

// if model is not 'solvetag' update this function
const seedSolution = () => Solution.bulkCreate(solutionData);

module.exports = seedSolution;