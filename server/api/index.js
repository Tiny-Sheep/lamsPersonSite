'use strict'

const router = require('express').Router()

router.use('/post', require('./post'));
router.use('/user', require('./user'));
router.use('/comment', require('./comment'))


router.use((req, res, next) => {
  res.status(404).send('Not found');
});

module.exports = router;

