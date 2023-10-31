const { Category } = require('../tables');

const categories = [
  {
    category_name: 'Sports',
  },
  {
    category_name: 'Furit',
  },
  {
    category_name: 'Hats',
  }
];

const categoriesSeed = () => Category.bulkCreate(categories);

module.exports = categoriesSeed;
