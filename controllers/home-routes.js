const { Category, Solution } = require('../models');

const router = require('express').Router();

// router.get('/', (req, res) => {
//   Category.findAll({
//     attributes: [
//       'category_name'
//     ]
//   })
//     .then(catData => {
//       const categories = catData.map(category => category.get({ plain: true }));
//       res.render('homepage', { categories });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
//   Solution.findAll({
//     where: {
//       id: 2
//     },
//     attributes: [
//       'id', 'name', 'solution', 'priority', 'category_id', 'user_id'
//     ]
//   })
//     .then(solutionData => {
//       const solutions = solutionData.map(sol => sol.get({ plain: true }));
//       //remove/replace this when we figure out how many solutions to display on homepage
//       const oneSolution = solutions[0];

//       res.render('homepage', { oneSolution });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.get('/', (req, res) => {
//   Category.findAll({
//     attributes: [
//       'category_name'
//     ]
//   })
//   Solution.findAll({
//     where: {
//       id: 2
//     },
//     attributes: [
//       'id', 'name', 'solution', 'priority', 'category_id', 'user_id'
//     ]
//   })
//     .then(queryData => {
//       // const query = queryData.map(array => array.get({ plain: true }));
//       console.log(queryData);
//       // const categories = catData.map(category => category.get({ plain: true }));
//       // res.render('homepage', { categories });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

router.get('/', async (req, res) => {
  try{
    const categoryQuery = await Category.findAll({
      attributes: [
        'category_name'
      ]
    });
    const solutionQuery = await Solution.findAll({
      where: {
        id: 2
      },
      attributes: [
        'id', 'name', 'solution', 'priority', 'category_id', 'user_id'
      ]
    });
    
    const categories = categoryQuery.map(array => array.get({ plain: true }));
    const sol = solutionQuery.map(array => array.get({ plain: true }));

    console.log(categories, sol);
    
    res.render('homepage', {
      categories,
      sol
    })
  }
    catch(err) {
      console.log(err);
      res.status(500).json(err);
    };
});

module.exports = router;