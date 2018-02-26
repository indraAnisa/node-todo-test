var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://joko:jokopret123@ds021289.mlab.com:21289/todosapp_db');


module.exports = {mongoose};