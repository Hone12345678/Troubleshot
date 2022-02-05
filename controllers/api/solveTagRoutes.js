const router = require("express").Router();
const { Category, Solution, SolveTag, Tag, User } = require("../../models");

router.get("/", (req, res) => {
  SolveTag.findAll()
    .then((dbSolveTagData) => res.json(dbSolveTagData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
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

router.post("/", (req, res) => {
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

router.put("/:id", (req, res) => {
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

router.delete("/:id", (req, res) => {
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
