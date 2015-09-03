var mongoose = require('mongoose');
var db = null;

exports.Connect = function(){
	if (db == null){
		//mongoose.connect('mongodb://localhost:27017/RoomBooker');
		mongoose.connect('mongodb://turnsapp:turnsapp123@ds059712.mongolab.com:59712/turnsapp');
		db = mongoose.connection;
		db.on('error', console.error.bind(console, 'connection error:'));
	}	
	
	return db;
};
