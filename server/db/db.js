const Sequelize = require('sequelize');
const pkg = require('../../package.json');


const db = new Sequelize(`postgres://localhost:5432/${pkg.name}`, {
  logging: false,
});


console.log("getting into db/db.js")

module.exports = db
