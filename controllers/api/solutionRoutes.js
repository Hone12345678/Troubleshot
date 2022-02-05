const router = require('express').Router();
const {Category, Solution, SolveTag, Tag, User} = require('../../models')

router.get("/", (req, res) => {
  Solution.findAll()
    .then((dbSolutionData) => res.json(dbSolutionData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
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

router.post("/", (req, res) => {
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

router.put('/:id', (req, res) => {
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


router.delete("/:id", (req, res) => {
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