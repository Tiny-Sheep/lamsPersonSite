const db = require('./db');

require('./models');

console.log("getting into db/index.js")
module.exports = db;
