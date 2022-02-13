const router = require("express").Router();
const {Category} = require("../../models");
const withAuth = require('../../utils/auth');


// find all categories
router.get("/", withAuth, (req, res) => {
  Category.findAll({
    where: {
      user_id: req.session.user_id
    }
  })
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//find categories by id specific to the user
router.get("/:id", withAuth, (req, res) => {
  Category.findOne({
    where: {
      id: req.session.user_id,
    }
  })
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//create a new category
router.post("/", withAuth, (req, res) => {
  console.log('---------hello--------');
  req.body.user_id = req.session.user_id;
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
router.put('/:id', withAuth, (req, res) => {
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
router.delete("/:id", withAuth, (req, res) => {
  Category.destroy({
    where: {
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
