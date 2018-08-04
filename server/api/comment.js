const router = require('express').Router();
// will need to get the campus DB model here
const { Comment } = require('../db/models');

//Campus Routes

// GET /api/Comment

router.get('/', async (req, res, next) => {
  try {
    const allComments = await Comment.findAll()
    res.json(allComments)
  } catch (err) {
    return err;
  }
});

module.exports = router