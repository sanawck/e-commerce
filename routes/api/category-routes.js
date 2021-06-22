const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  console.log("/api/categories endpoint hit");
  Category.findAll().then((categoryData) => {
    res.json(categoryData);
  });

  // find all categories
  // be sure to include its associated Products
});

router.get("/:id", (req, res) => {
  console.log("at api categories/: id hit ");
  Category.findOne({ where: { id: req.params.id }, include: [Product] })
    .then((categoryData) => res.json(categoryData))
    .catch((error) => res.status(400).json(error));
});

// find one category by its `id` value
// be sure to include its associated Products
router.post("/", (req, res) => {
  Category.create(req.body)
    .then((category) => res.status(200).json(category))
    .catch((error) => res.status(400).json(error));
  // create a new category
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((category) => res.status(200).json(category))
    .catch((error) => res.status(400).json(error));
});

router.delete("/:id", (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((category) => res.status(200).json(category))
    .catch((error) => res.status(400).json(error));
  // delete a category by its `id` value
});

module.exports = router;
