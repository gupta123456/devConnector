const express = require('express');
const router = express.Router();

// @route    GET api/posts
// @desc     Rtest route
// @access   Public
router.get('/', (req, res) => res.json({ msg: 'Posts works' }));

module.exports = router;