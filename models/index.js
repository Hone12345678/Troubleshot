//import models
const Category = require('./Category');
const Solution = require('./Solution');
const User = require('./User');


// user has many categories
User.hasMany(Category, {
    foreignKey: 'user_id'
})
// category belongs to one user
Category.belongsTo(User, {
    foreignKey: 'user_id'
})

// category has many solution
Category.hasMany(Solution,{
    foreignKey: 'category_id'
})

// solution belongs to one category
Solution.belongsTo(Category,{
    foreignKey: 'category_id'
})

// user has many solutions
User.hasMany(Solution,{
    foreignKey: 'user_id'
})

// // solution has many tags
// Solution.belongsToMany(Tag,{
//     through: SolveTag
// })

// // tag belongs to many solutions
// Tag.belongsToMany(Solution,{
//     through: SolveTag
// })




module.exports = {
    Category,
    Solution,
    User,
  };