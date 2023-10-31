// Import required modules
const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection.js");
class Category extends Model {}
Category.init(
  {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    category_name: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: "category",
  }
);

// Export the Category model
module.exports = Category;
