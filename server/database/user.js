const Sequelize = require("sequelize");
const sequelize = require("./index");

const User = sequelize.define("user", {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});

module.exports = User;
