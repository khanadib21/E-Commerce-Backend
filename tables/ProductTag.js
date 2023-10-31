const sequelize = require("../config/connection");
const { Model, DataTypes } = require("sequelize");
class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        key: "id",
        model: "tag",
      },
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        key: "id",
        model: "product",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    modelName: "product_tag",
  }
);

module.exports = ProductTag;
