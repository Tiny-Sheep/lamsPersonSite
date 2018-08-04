const Sequelize = require('sequelize');
const pkg = require('../../package.json');
console.log("what is my pkg.name", pkg.name)
const db = new Sequelize(`postgres://localhost:1337/${pkg.name}`, {
  logging: false,
});

console.log("getting into db/db.js")

module.exports = db
