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
    .find({
      completed: false
    })
    .toArray()
    .then(
      docs => {
        console.log("Todos");
        console.log(JSON.stringify(docs, undefined, 2));
      },
      err => {
        console.log("unable to fetch todods".err);
      }
    );

  client.close();
});