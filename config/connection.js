require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASS, {
  dialect: 'mysql',
  host: 'localhost',
  dialectOptions: {
    decimalNumbers: true,
  },
});
module.exports = sequelize;
