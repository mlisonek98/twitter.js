const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true } );
});

const Eventbrite = require('eventbrite');
const eb_client = Eventbrite({
  'app_key': "ITATE5HGD4DYT4IB6MJQIB67ZALROSPVXVI64JFKECOXRJ3VVV",
  'user_key': "AWXQ6FOPFWLQBPAIORNZ"
});

var params = { 'city': "San Francisco", 'region': "CA" };

router.get('/event', (req, res, next) => {
    eb_client.event_search(params, function (err, data) {
      console.log(err);
      console.log(data);
    });
    next()
  })

router.get('/style', function(req,res){
 res.sendFile('stylesheets/style.css')
})

router.get( '/users/:name', function (req, res) {
  //console.log( req.params.name );
  let tweets = tweetBank.find(function(val){return val.name === req.params.name})
  //console.log(tweets)
  res.render('index', {tweets: tweets})
});



module.exports = router;