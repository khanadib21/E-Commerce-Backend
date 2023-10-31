const categoriesSeed = require('./category');
const ProductsSeed = require('./product');
const TagsSeed = require('./tag');
const productTagsSeed = require('./product-tag');
const sequelize = require('../config/connection');
const allDataSeed = async () => {
  await sequelize.sync({ force: true });
  await categoriesSeed();
  await ProductsSeed();
  await TagsSeed();
  await productTagsSeed();
  process.exit(0);
};

allDataSeed();
