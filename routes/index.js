var moment = require('moment');
var express = require('express');
var router = express.Router();

const prePopulatedMessages = [
  {
    text: "Hi there!",
    user: "Elijah",
    added: moment(new Date()).format('D MMM YYYY')
  },
  {
    text: "Post messages using the form below :)",
    user: "Elijah",
    added: moment(new Date()).format('D MMM YYYY')
  },
];
const data = {user: undefined, messages: prePopulatedMessages};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', data: data});
});

router.post('/new', function(req, res, next) {
  data.user = req.body.nameText;
  data.messages.push({text: req.body.messageText, user: data.user, added: moment(new Date()).format('D MMM YYYY')});
  res.redirect('/');
});

module.exports = router;
