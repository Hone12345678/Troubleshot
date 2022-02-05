const { Category, Solution } = require('../models');

const router = require('express').Router();

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