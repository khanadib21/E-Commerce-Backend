const { Product } = require('../tables');

const newProductData = [
  {
    name: 'Product one',
    product_price: 7,
    product_stock: 33,
    category_id: 1,
  },

  {
    product_price: 7,
    name: 'Mango',
    category_id: 3,
    product_stock: 14,
  },
  {
    name: 'Cargo Shorts',
    product_price: 20,
    product_stock: 22,
    category_id: 2,
  },
  {
    name: 'Baseball Hat',
    product_price: 10,
    product_stock: 22,
    category_id: 3,
  }
];

const seedProducts = () => Product.bulkCreate(newProductData);

module.exports = seedProducts;
