var express = require('express');
var router = express.Router();
let users = { items: [] }

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hello/:firstName/:lastName', function (req, res, next) {
  res.render('hello', {
    firstName: req.params.firstName,
    lastName: req.params.lastName
  });
});

router.post('/', (req, res) => {
  users.items.push(req.body)
  res.send('Ok!');
})

module.exports = router;
