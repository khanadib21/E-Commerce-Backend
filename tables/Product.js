const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
class Product extends Model {}
Product.init(
  {

    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_price: {
      allowNull: false,
      validate: {
        isDecimal: true,
      },
      type: DataTypes.DECIMAL,
    },
    product_stock: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },

    category_id: {
      references: {
        model: "category",
      },
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);
module.exports = Product;
