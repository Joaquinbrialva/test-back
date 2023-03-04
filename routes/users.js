const express = require('express');
const { register, signIn } = require('../controllers/users');
const router = express.Router();

router.post('/', signIn);
router.post('/register', register);

module.exports = router;