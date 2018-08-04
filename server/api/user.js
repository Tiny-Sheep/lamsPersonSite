const router = require("express").Router();
// will need to get the campus DB model here
const { User } = require("../db/models");

//Campus Routes

// GET /api/User

router.get('/', async (req, res, next) => {
  try {
    const allUsers = await User.findAll()
    res.json(allUsers)
  } catch (err) {
    return err;
  }
});

module.exports = router