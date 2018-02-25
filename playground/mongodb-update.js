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

  db
    .collection("Todos")
    .findOneAndUpdate({
      _id: new ObjectID("5a910d711a60161180dc72cd")
    }, {
      $set: {
        completed: true
      }
    }, {
      returnOriginal: false
    })
    .then(result => {
      console.log(result);
    });

  client.close();
});