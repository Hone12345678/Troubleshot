const router = require("express").Router();
const { Category, Solution, SolveTag, Tag, User } = require("../../models");


// find all categories
router.get("/", (req, res) => {
  Category.findAll()
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//find categories by id specific to the user
router.get("/:id", (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id,
    }
  })
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//create a new category
router.post("/", (req, res) => {
  console.log(req.body)
  console.log('---------hello--------');
  console.log(req.session);
  Category.create(req.body, {
    category_name: req.body.category_name,
    user_id: req.body.user_id,
  })
    .then((dbCategoryData) => {
      res.json(dbCategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//update an existing category
router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id
    },
    category_name: req.body.category_name,
  })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

//delete an existing category
router.delete("/:id", (req, res) => {
  Category.destroy({
    when: {
      id: req.params.id,
    },
  })
    .then((dbCategoryData) => {
      res.json(dbCategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
