const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("supermind_data", "root", "rudramanu@00", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = { sequelize };
