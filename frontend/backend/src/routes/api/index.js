const express = require('express');

const router = express.Router();

router.get('/', function(req, res) {
    res.send("404 Page not found!");
});

const { signup, signin } = require('../../controllers/auth');
router.post('/signup', signup);
router.post('/signin', signin);

module.exports = router;