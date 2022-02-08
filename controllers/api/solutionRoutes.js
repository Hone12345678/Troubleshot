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


module.exports = router;