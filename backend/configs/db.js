const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("supermind", "admin", "Manuranjan00", {
  host: "database-1.cugai8ped57o.ap-south-1.rds.amazonaws.com",
  dialect: "mysql",
});

module.exports = { sequelize };
