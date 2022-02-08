const router = require('express').Router();
const {Category, Solution, SolveTag, Tag, User} = require('../../models')
const withAuth = require('../../utils/auth');

//find all tags
router.get("/", withAuth, (req, res) => {
  Tag.findAll()
    .then((dbTagData) => res.json(dbTagData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//find tag by id
router.get("/:id", withAuth, (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((dbTagData) => res.json(dbTagData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//create new tag
router.post("/", withAuth, (req, res) => {
  Tag.create(req.body, {
    tag_name: req.body.tag_name
  })
    .then((dbTagData) => {
      res.json(dbTagData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//update existing tags
router.put("/:id", withAuth, (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
    tag_name: req.body.tag_name
  })
    .then((dbTagData) => res.json(dbTagData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

//delete existing tag
router.delete("/:id", withAuth, (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbTagData) => {
      res.json(dbTagData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;