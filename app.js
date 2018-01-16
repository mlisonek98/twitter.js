const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan("combined"))
console.log('hello');

// app.use(function(req, res, next){
// 	console.log(req.method + " " + req.path);
// 	console.log(res.statusCode);
// 	next();
// })



app.get("/", (req, res, next) => res.send("Hello World"));



app.listen(3000, () => console.log('server listening'))

