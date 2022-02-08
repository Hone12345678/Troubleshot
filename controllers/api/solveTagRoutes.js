const router = require("express").Router();
const { Category, Solution, SolveTag, Tag, User } = require("../../models");
const withAuth = require('../../utils/auth');

//find all Solvetags
router.get("/", withAuth, (req, res) => {
  SolveTag.findAll()
    .then((dbSolveTagData) => res.json(dbSolveTagData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//find solvetag by id
router.get("/:id", withAuth, (req, res) => {
  SolveTag.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((dbSolveTagData) => res.json(dbSolveTagData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//creates new solvetag
router.post("/", withAuth, (req, res) => {
  SolveTag.create(req.body, {
    solution_id: req.body.solution_id,
    tag_id: req.body.tag_id,
  })
    .then((dbSolveTagData) => {
      res.json(dbSolveTagData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//edits existing solve tag by id
router.put("/:id", withAuth,(req, res) => {
  SolveTag.update(req.body, {
    where: {
      id: req.params.id,
    },
    solution_id: req.body.solution_id,
    tag_id: req.body.tag_id,
  })
    .then((dbSolveTagData) => res.json(dbSolveTagData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

//deletes existing solvetag by id
router.delete("/:id", withAuth, (req, res) => {
  SolveTag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbSolveTagData) => {
      res.json(dbSolveTagData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
