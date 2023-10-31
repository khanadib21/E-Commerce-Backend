const { Category, Product } = require('../../tables');
const router = require('express').Router();

router.get('/', async (req, res) => {
  console.log("all_categories")
  try {
    // debugger
    const all_categories = await Category.findAll({ include: [{ model: Product }] });
    res.status(200).json(all_categories);
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, { include: [{ model: Product }] });

    if (!category) {
      res.status(404).json({ message: 'Category not found' });
      return;
    }

    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(200).json(category);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create category' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const category = await Category.update(req.body, { where: { id: req.params.id } });

    !category[0] ? res.status(404).json({ message: 'Category not found' }) : res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update category' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const category = await Category.destroy({ where: { id: req.params.id } });

    !category ? res.status(404).json({ message: 'Category not found' }) : res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
