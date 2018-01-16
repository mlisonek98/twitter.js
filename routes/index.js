const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
const bodyParse = require('body-parser');


router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true } );
});
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