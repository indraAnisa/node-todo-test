var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect(
 "mongodb://joko:jokopret@ds021289.mlab.com:21289/todosapp_db"
  // "mongodb://localhost:27017/todosapp_db"
  , err => { 
    if(err)
    console.log("Koneksi error ",err)
  }
);

module.exports = { mongoose };
