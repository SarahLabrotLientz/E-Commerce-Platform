const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
     // finds all categories
  // includes its associated Products
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
 
});

 //This finds one category by its `id` value
router.get('/:id', (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],   // and includes its associated Products
    });

    if (!categoryData) {
      res.status(404).json({ message: 'Please try again, no category found with that id' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Created a new category
router.post('/', (req, res) => {
  try {
    const categoryData = await Category.create({
      category_name: req.body.name
    })
    res.status(200).json(categoryData)
  } catch(err) {
      console.log(err);
      res.status(400).json({ message: "an error occured", err: err });
    };
});



router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;

//reference code begins -------------------------------------------------
const router = require('express').Router();
const { Driver, License, Car } = require('../../models');

// GET all drivers
router.get('/', async (req, res) => {
  try {
    const driverData = await Driver.findAll({
      include: [{ model: License }, { model: Car }],
    });
    res.status(200).json(driverData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single driver
router.get('/:id', async (req, res) => {
  try {
    const driverData = await Driver.findByPk(req.params.id, {
      include: [{ model: License }, { model: Car }],
    });

    if (!driverData) {
      res.status(404).json({ message: 'No driver found with that id!' });
      return;
    }

    res.status(200).json(driverData);
  } catch (err) {
    res.status(500).json(err);
  }
});