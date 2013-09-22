var userModel = require('../models/users');
var videosModel = require('../models/videos');

module.exports = function(app){

	// Routes
	app.get('/', function(req, res){
	  res.render('index'); 
	});

	app.post('/', function (req, res){
	  	var data = req.body;
	  	res.moduleResponse = userModel.login(data, function(e,obj){
	  		//console.log(obj);
	  		res.send(obj);
	  	});
	});

	app.post('/addNewUser', function (req, res){
	  	var data = req.body;
	  	res.moduleResponse = userModel.new(data, function(e,obj){
			//console.log(obj);
	  		res.send(obj);
	  	});
	});

	app.get('/partial/:name', function (req, res) {
	  	var name = req.params.name;
	 	res.render('partials/partial' + name);
	});

	app.get('/videolist', function (req, res) {

		var data = req.body; 
	  	res.moduleResponse = videosModel.list(data, function(e,obj){
	  		//console.log('en routes');
			//console.log(obj);
	  		res.send(obj); 
	  	});
	});

	app.get('*', function (req, res){
	  res.render('index');
	});
}


/*exports.index = function(req, res){
  res.render('index');
}

exports.partial = function (req, res) {
  var name = req.params.name;
  res.render('partials/partial' + name);
}*/