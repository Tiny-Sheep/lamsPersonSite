const Sequelize = require('sequelize');
const pkg = require('../../package.json');

module.exports = new Sequelize(`postgres://localhost:8080/${pkg.name}`, {
  logging: false,
});
