var db = require('mongodb').Db;
var server = require('mongodb').Server;
//console.log(server);

//mongo paulo.mongohq.com:10060/fansWorldDemo -u <user> -p<password>

var dbPort = 10060;
var dbHost = 'paulo.mongohq.com';
var dbName = 'fansWorldDemo';
var dbUser = 'fw';
var dbPass = 'fw';

var users = {};

users.db = new db(dbName, new server(dbHost, dbPort, {safe : true, auto_reconnect : true}, {}));
users.db.open(function(e, d){
	if(e){
		console.log(e); 
	}else{
		//console.log(d);
		console.log("Conectado a la base de datos: "+ dbName);
		users.db.authenticate('fw', 'fw', function(err, result) {
			//console.log(err);
			//console.log(result);
		});
	}
});

users.colUsers = users.db.collection('users');

module.exports = users;

users.new = function(newData, callback){
	//
	console.log(newData);
	users.colUsers.findOne({'email' : newData.email} , function(e ,obj){
		if(obj != 'null'){
			console.log('correcto');
			users.colUsers.insert(newData, callback(obj));
		}else{
			//console.log('error');
			callback("Ese email ya existe");
		}
	});
}

users.login = function(newData, callback){
	console.log(newData);
	//console.log(users.colUsers.db);
	users.colUsers.findOne({'name' : newData.user, 'pswd' : newData.pswd} , function(e ,obj){
		if(obj != 'null'){
			//console.log('correcto');
			callback(null, obj)
		}else{
			//console.log('error');
			return 0;
		}
	});
}

