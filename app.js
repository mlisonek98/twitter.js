const express = require('express');
const morgan = require('morgan');
const app = express();
const nunjucks = require('nunjucks');
const routes = require('./routes')
// const path = require('path');'
app.use('/',routes)

app.use(express.static(__dirname + '/public'));

var locals = {
  title: 'An Example',
  people: [
      { name: 'Gandalf'},
      { name: 'Frodo' },
      { name: 'Hermione'}
  ]
};

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});
app.use(morgan("combined"));

// app.use(function(req, res, next){
// 	console.log(req.method + " " + req.path);
// 	console.log(res.statusCode);
// 	next();
// })



// app.get("/", (req, res, next) => res.render('index.html', locals));



app.listen(3000, () => console.log('server listening'))

