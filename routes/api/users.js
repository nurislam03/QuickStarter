const express = require('express');
const router = express.Router();

// @route GET api/users/test
// @description tests users route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'users route works' }));

module.exports = router;
