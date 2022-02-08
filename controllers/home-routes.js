const { Category, Solution } = require('../models');
const withAuth = require('../utils/auth')
const router = require('express').Router();

router.get('/', withAuth, async (req, res) => {
  //perform multiple queries in one get request using async/await
  try {
    console.log(req.session)
    const categoryQuery = await Category.findAll({
      where: {
        user_id: req.session.user_id
      },
      attributes: [
        'category_name', 'id'
      ]
    });
    const solutionQuery = await Solution.findAll({
      // ***********once we can add solutions to new users we need to update the where statement*****
      //query for the top 3 results
      // where: {
      //   user_id: req.session.user_id
      // },
      limit: 3,
      attributes: [
        'id', 'name', 'solution', 'priority', 'category_id', 'user_id'
      ]
    });

    //use .map() method on query arrays so that we only get values from table
    const categories = categoryQuery.map(array => array.get({ plain: true }));
    const sol = solutionQuery.map(array => array.get({ plain: true }));

    //send the new arrays to the homepage to be displayed on the home page
    res.render('homepage', {
      categories,
      sol, 
      loggedIn: req.session.loggedIn
    })
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  };
});

//get route for highest-priority button
router.get('/highest-priority', withAuth, async (req, res) => {
  //perform multiple queries in one get request using async/await
  try {
    const categoryQuery = await Category.findAll({
      where: {
        user_id: req.session.user_id
      },
      attributes: [
        'category_name', 'id'
      ]
    });
    const solutionQuery = await Solution.findAll({
      // ***********once we can add solutions to new users we need to update the where statement*****
      //query for the top 3 results
       // where: {
      //   user_id: req.session.user_id
      // },
      limit: 3,
      attributes: [
        'id', 'name', 'solution', 'priority', 'category_id', 'user_id'
      ],
      order: [
        ['priority', 'DESC']
      ]
    });

    //use .map() method on query arrays so that we only get values from table
    const categories = categoryQuery.map(array => array.get({ plain: true }));
    const sol = solutionQuery.map(array => array.get({ plain: true }));

    console.log(sol);
    //send the new arrays to the homepage to be displayed on the home page
    res.render('homepage', {
      categories,
      sol, 
      loggedIn: req.session.loggedIn
    })
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  };
});

//get route for highest-priority button
router.get('/by-category/:catId', withAuth, async (req, res) => {
  //perform multiple queries in one get request using async/await
  try {
    const categoryQuery = await Category.findAll({
      where: {
        id: req.params.catId
      },
      attributes: [
        'category_name', 'id'
      ]
    });
    const solutionQuery = await Solution.findAll({
      // ***********once we can add solutions to new users we need to update the where statement*****
      //query for the top 3 results
      // where: {
      //   category_id: req.params.catId
      // },
      attributes: [
        'id', 'name', 'solution', 'priority', 'category_id', 'user_id'
      ],
    });

    //use .map() method on query arrays so that we only get values from table
    const categories = categoryQuery.map(array => array.get({ plain: true }));
    const sol = solutionQuery.map(array => array.get({ plain: true }));

    console.log(sol);
    //send the new arrays to the homepage to be displayed on the home page
    res.render('homepage', {
      categories,
      sol, 
      loggedIn: req.session.loggedIn
    })
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  };
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


module.exports = router;