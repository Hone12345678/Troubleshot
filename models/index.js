//import models
const Category = require('./Category');
const Solution = require('./Solution');
const SolveTag = require('./SolveTag');
const Tag = require('./Tag');
const User = require('./User');


// user has many categories
User.hasMany(Category, {
    foreignKey: 'user_id'
})
// category belongs to one user
Category.belongsTo(User, {
    foreignKey: 'user_id'
})
// category has only one user
// Category.hasOne(User,{
//     foreignKey: 'user_id'
// })

// category has many solution
Category.hasMany(Solution,{
    foreignKey: 'category_id'
})

// solution has one category
// Solution.hasOne(Category, {
//     foreignKey: 'category_id'
// })

// solution belongs to one category
Solution.belongsTo(Category,{
    foreignKey: 'solution_id'
})

// user has many solutions
User.hasMany(Solution,{
    foreignKey: 'user_id'
})

// solution has many tags
Solution.hasMany(Tag,{
    foreignKey: 'solution_id'
})

// solution belongs to many tags
// Solution.hasMany(Tag,{
//     foreignKey: 'solution_id'
// })

// tag has many solutions
// Tag.hasMany(Solution,{
//     foreignKey: 'tag_id'
// })

// tag belongs to many solutions
Tag.belongsTo(Solution,{
    foreignKey: 'solution_id'
})



module.exports = {
    Category,
    Solution,
    SolveTag,
    Tag,
    User,
  };