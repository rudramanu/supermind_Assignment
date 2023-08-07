const { Sequelize } = require("sequelize");
require("dotenv").config();
const sequelize = new Sequelize("supermind", "admin", process.env.password, {
  host: "database-1.cugai8ped57o.ap-south-1.rds.amazonaws.com",
  dialect: "mysql",
});

module.exports = { sequelize };
