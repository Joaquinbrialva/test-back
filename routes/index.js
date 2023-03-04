var express = require('express');
var router = express.Router();
const userRouter = require('../routes/users')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'testTecnico' });
});

router.use('/users', userRouter);

module.exports = router;