var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars')

var foodData = require('./foodData.json')

var app = express();

var port = 8080;

app.engine('handlebars', exphbs({ defaultLayout: null }))
app.set('view engine', 'handlebars')

app.use(express.static('public'));



app.get('/recipe', function (req, res, next) {



    res.status(200).render('recipesPage', {cards: [1, 2, 3, 4]})


});

app.get("*", function (req, res, next) {
  res.status(404).render('404', {
    page: req.url,
    scripts: [ "/index.js" ]
  });
});

app.listen(port, function (err) {
  if (err) {
    throw err;
  }
  console.log("== Server listening on port", port);
});
