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
    .collection("Users")
    .findOneAndUpdate({
      _id: new ObjectID("5a8fe324e610545380284b4f")
    }, {
      $set: {
        name: 'Joko'
      },
      $inc: {
        "age": 1
      }
    }, {
      returnOriginal: false
    })
    .then(result => {
      console.log(result);
    });

  client.close();
});