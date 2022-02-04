//import models
const Category = require('./Category');
const Solution = require('./Solution');
const SolveTag = require('./SolveTag');
const Tag = require('./Tag');
const User = require('./User');

//User has many Solutions 

//SolveTags belong to many 

//Solution belongsToMany Categories 


module.exports = {
    Category,
    Solution,
    SolveTag,
    Tag,
    User,
  };