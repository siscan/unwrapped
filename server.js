var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars')
var foodData = require('./foodData.json')

var app = express();
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

var port = 3000;

app.get('/', function(req, res, next){
	res.status(200).render('mainpage')
})

app.get('/recipe', function (req, res, next) {
    res.status(200).render('recipesPage', {
			cards: foodData
		})
});

app.use(express.static('public'));

/*
app.get('/recipeView', function (req, res, next) {
    res.status(200).sendFile(path.join(__dirname, 'public', 'recipeView.html'))
});
*/

/*
app.get("*", function (req, res, next) {
  res.status(404).render('404', {
    page: req.url,
    scripts: [ "/index.js" ]
  });
});

*/

app.listen(port, function (err) {
  if (err) {
    throw err;
  }
  console.log("== Server listening on port", port);
});
