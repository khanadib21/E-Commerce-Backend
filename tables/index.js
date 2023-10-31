// Import models
const Product = require('./Product');
const ProductTag = require('./ProductTag');
const Category = require('./Category');
const Tag = require('./Tag');

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});

Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

Category.hasMany(Product, {
  foreignKey: 'category_id',
});

module.exports = {
  Product,
  Tag,
  Category,
  ProductTag,
};
