const {
  MongoClient,
  ObjectID
} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/", (err, client) => {
  if (err) {
    return console.log("unable to connect mongodb server", err);
  }

  console.log("Connected to mongodb server");

  var db = client.db("TodoApp");

  //deletemany
  db.collection('Todos').deleteMany({
    text: 'Eat lunch'
  }).then((result) => {
    console.log(result);
  })
  //deleteone

  //findoneAnd dlete
  

  //db.close();

});