const { ProductTag } = require('../tables');

const productTags = [
  {
    product_id: 1,
    tag_id: 1,
  },
  {
    product_id: 1,
    tag_id: 2,
  },
  {
    product_id: 2,
    tag_id: 3,
  },
  {
    product_id: 3,
    tag_id: 1,
  },
  {
    product_id: 3,
    tag_id: 2,
  }
];

const productTagsSeed = () => ProductTag.bulkCreate(productTags);

module.exports = productTagsSeed;
