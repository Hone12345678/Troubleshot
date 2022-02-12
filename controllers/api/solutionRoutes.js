const router = require('express').Router();
const {Category, Solution, SolveTag, Tag, User} = require('../../models')
const withAuth = require('../../utils/auth');

//find all solutions
router.get("/", withAuth, (req, res) => {
  Solution.findAll()
    .then((dbSolutionData) => res.json(dbSolutionData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//find solution by id
router.get("/:id", withAuth, (req, res) => {
  Solution.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((dbSolutionData) => res.json(dbSolutionData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//create a new solution
router.post("/", withAuth, (req, res) => {
  Solution.create(req.body, {
    name: req.body.name,
    solution: req.body.solution,
    priority: req.body.priority,
    category_id: req.body.category_id,
    user_id: req.body.user_id
  })
    .then((dbSolutionData) => {
      res.json(dbSolutionData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//edit an existing solution
router.put('/:id', withAuth, (req, res) => {
  Solution.update(req.body, {
    where: {
      id: req.params.id
    },
    name: req.body.name,
    solution: req.body.solution,
    priority: req.body.priority,
    category_id: req.body.category_id
  })
    .then(dbSolutionData => res.json(dbSolutionData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

//delete an exisitng solution
router.delete("/:id", withAuth, (req, res) => {
  Solution.destroy({
    when: {
      id: req.params.id,
    },
  })
    .then((dbSolutionData) => {
      res.json(dbSolutionData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get route for highest-priority button
router.get('/edit/:id', withAuth, async (req, res) => {
  //perform multiple queries in one get request using async/await
  try {
    const categoryQuery = await Category.findAll({
      where: {
        user_id: req.session.user_id,
        // id: req.params.catId
      },
      attributes: [
        'category_name', 'id'
      ]
    });
    const solutionQuery = await Solution.findAll({
      where: {
        id: req.params.id
      },
      attributes: [
        'id', 'name', 'solution', 'priority', 'category_id', 'user_id'
      ],
      include: [
        {
          model: Category,
          attributes:['id', 'category_name']
      }
    ]
    });

    //use .map() method on query arrays so that we only get values from table
    const categories = categoryQuery.map(array => array.get({ plain: true }));
    const solutions = solutionQuery.map(array => array.get({ plain: true }));
    const sol = solutions[0];
    //send the new arrays to the homepage to be displayed on the home page
    console.log("solution",sol);
    res.render('editSolution', {
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