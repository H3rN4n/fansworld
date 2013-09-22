var db = require('mongodb').Db;
var server = require('mongodb').Server;
//console.log(server);

//mongo paulo.mongohq.com:10060/fansWorldDemo -u <user> -p<password>

var dbPort = 10060;
var dbHost = 'paulo.mongohq.com';
var dbName = 'fansWorldDemo';
var dbUser = 'fw';
var dbPass = 'fw';

var videos = {};

videos.db = new db(dbName, new server(dbHost, dbPort, {safe : true, auto_reconnect : true}, {}));
videos.db.open(function(e, d){
	if(e){
		console.log(e);
	}else{
		//console.log(d);
		console.log("Conectado a la base de datos: "+ dbName);
		videos.db.authenticate('fw', 'fw', function(err, result) {
			//console.log(err);
			//console.log(result);
		});
	}
});

videos.colVideos = videos.db.collection('videos');

module.exports = videos;

videos.list = function(newData, callback){
	//console.log('en el modulo');
	/*videos.colVideos.find({} , function(e ,obj){
		if(obj != 'null'){
			//console.log('finded');
			//console.log(obj)
			callback(null, obj.collectionName);
		}else{
			//console.log('error');
			return 0;
		}
	});*/
	videos.colVideos.find({}).limit(10).toArray(function(e, obj){
		if(obj != 'null'){
			//console.log('finded');
			//console.log(obj)
			callback(null, obj);
		}else{
			//console.log('error');
			return 0;
		}
	});
}

