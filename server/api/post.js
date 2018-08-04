const router = require("express").Router();
// will need to get the campus DB model here
const { Post } = require("../db/models");

//Campus Routes

// GET /api/Post

router.get('/', async (req, res, next) => {
  try {
    const allPosts = await Post.findAll()
    res.json(allPosts)
  } catch (err) {
    return err;
  }
});


module.exports = router