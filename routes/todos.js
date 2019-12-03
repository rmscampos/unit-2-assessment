var express = require('express');
var router = express.Router();
var Todo = require('../data/todo');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res) {
  req.body.done = false;
  Todo.create(req.body);
  res.redirect('/');
})

module.exports = router;
