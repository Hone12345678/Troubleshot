const { Category } = require('../models');

const router = require('express').Router();

router.get('/', (req, res) => {
  Category.findAll({
    attributes: [
      'category_name'
    ]
  })
    .then(catData => {
      const categories = catData.map(category => category.get({ plain: true }));
      res.render('homepage', { categories });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;