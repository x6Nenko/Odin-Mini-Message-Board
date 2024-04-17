const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'Mini Message Board' });
});

router.post('/new', function(req, res, next) {
  messages.push({text: req.body.newMessage, user: req.body.userName, added: new Date()});
  res.redirect('/');
});

module.exports = router;
